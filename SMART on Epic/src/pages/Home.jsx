import { useEffect, useState } from 'react';
import getWellKnown from '../auth/wellKnown';
import { getVariables } from '../config/config';
import { getChallenge } from '../auth/pcke';
import { setChallenge } from "../config/config";
import { authURL } from '../auth/authorization';
import SignIn from '../components/SignInButton';


function HomePage() {
    const [endPoints, setEndPoints] = useState(null);

    useEffect(() => {
        const configuration = async () => {
            // Get the endpoints and set the config vars
            await getWellKnown();
            // Get the challenges
            const challenge = await getChallenge();
            // Set the challenge vars
            setChallenge(challenge.code_challenge, challenge.code_verifier)  
            // Get all the vars
            const variables = getVariables();

            setEndPoints(variables);
        };
        configuration();
    }, []);

    function handleSignIn() {
        if (!endPoints) {
            return;
        }
        // Pass the vars to construct the URL
        const epicURL = authURL(
            endPoints.AUTHORIZATION_ENDPOINT,
            endPoints.REDIRECT_URI,
            endPoints.CLIENT_ID,
            endPoints.CODE_CHALLENGE,
            endPoints.FHIR_BASE_URL
        );
        // Relocate to the URL for Auth
        window.location.href = epicURL;
    }

    return (
        <div>
            {endPoints ? (
                <SignIn handleSignIn={handleSignIn} />
            ) : (
                <p>Loading configuration...</p>
            )}
        </div>
    );
}

export default HomePage;