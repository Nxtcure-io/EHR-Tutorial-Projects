import { useEffect } from "react";
import { getToken } from "../auth/getToken";
import { useNavigate } from "react-router-dom";
import { setToken } from "../config/config";


// Function handles the oAuth redirect back
function CallBack() {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const tokenData = await getToken();
                if (tokenData) {
                    // Save the access token
                    localStorage.setItem("access_token", tokenData.access_token);
                    localStorage.setItem("patient_id", tokenData.patient);
                    // Set the access_token in the config
                    setToken(tokenData.access_token)

                    navigate("/patient-home"); // Redirect if successful
                }
            } catch (error) {
                console.error("Token retrieval failed:", error);
            }
        };

        fetchToken();
    }, [navigate]);

    return <h1>Processing authentication...</h1>;
}

export default CallBack;