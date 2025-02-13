import { getVariables } from "../config/config";
import axios from "axios";

// This function takes the code from the URL and gets the token.
export async function getToken(){
    try {
        // Get the code from the redirect URL
        const token_endpoint = localStorage.getItem('token_endpoint')
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (!code) {
            throw new Error("Authorization code not found in URL.");
        }

        if(!token_endpoint){
            throw new Error("Token endpoint not available.")
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

        // Make the token request
        const res = await axios.post(token_endpoint, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        // Log the response data
        console.log("Token Response:", res);
        return res.data; // Return the response for further use
    } catch (error) {
        console.error("Error fetching token:", error.response ? error.response.data : error.message);
    }
}