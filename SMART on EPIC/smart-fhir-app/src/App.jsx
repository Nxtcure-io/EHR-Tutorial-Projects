import { useState, useEffect } from 'react'
import fetchSmartConfig from './config/smartConfig';
import SignInButton from './components/SignInButton';
import './App.css'

function App() {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        const loadConfig = async () => {
            const fetchedConfig = await fetchSmartConfig();
            if(fetchedConfig){
                setConfig(fetchedConfig);
            }
        };
        loadConfig();
    }, []);

    const handleSignIn = () => {
        if(!config){
            console.error('SMART config is not loaded');
            return;
        }
        // Get the values for the Auth URL construction
        const client_id = import.meta.env.VITE_CLIENT_ID;
        const response_type = 'code';
        const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
        const scope = "launch openid profile fhirUser";
        const state = Math.random().toString(36).substring(7);

        // Construct OAuth 2.0 Authorization URL
        const authURL = `${config.authorizationEndpoint}?
        scope=${encodeURIComponent(scope)}&
        response_type=${response_type}&
        redirect_uri=${encodeURIComponent(redirect_uri)}&
        client_id=${client_id}&
        state=${state}`

        // Redirect user to Epic's authorization endpoint
        window.location.href = authURL;

    };

    return (
        <div>
            <SignInButton onClick={handleSignIn}/>
        </div>
    );
  
}
export default App
