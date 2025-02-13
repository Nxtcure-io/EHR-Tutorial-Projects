import { getVariables } from "../config/config";
import axios from "axios";

// This function takes the code from the URL and gets the token.
export async function getToken(){
    try {
        // Get the code from the redirect URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        console.log("Authorization Code:", code);

        if (!code) {
            throw new Error("Authorization code not found in URL.");
        }

        // Get stored configuration variables
        const config = getVariables();

        // Construct the token request body
        const body = new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: config.REDIRECT_URI,
            client_id: config.CLIENT_ID,
            code_verifier: localStorage.getItem("code_verifier"),
        });

        console.log(config.TOKEN_ENDPOINT)

        // Make the token request
        const res = await axios.post(config.TOKEN_ENDPOINT, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        // Log the response data
        console.log("Token Response:", res.data);
        return res.data; // Return the response for further use
    } catch (error) {
        console.error("Error fetching token:", error.response ? error.response.data : error.message);
    }
}