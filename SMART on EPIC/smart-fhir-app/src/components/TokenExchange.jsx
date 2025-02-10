import { useState, useEffect } from "react";

const TokenExchange = ({ authCode, config, onTokenReceived }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const exchangeToken = async () => {
            if (!config || !authCode) return;

            const tokenUrl = config.tokenEndpoint;
            const client_id = import.meta.env.VITE_CLIENT_ID;
            const redirect_uri = import.meta.env.VITE_REDIRECT_URI;

            const body = new URLSearchParams({
                grant_type: "authorization_code",
                code: authCode,
                redirect_uri,
                client_id,
            });

            try {
                const response = await fetch(tokenUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body,
                });

                const data = await response.json();
                if (data.access_token) {
                    setToken(data.access_token);
                    onTokenReceived(data.access_token);
                } else {
                    console.error("Token exchange failed", data);
                }
            } catch (error) {
                console.error("Error fetching access token:", error);
            }
        };

        exchangeToken();
    }, [authCode, config, onTokenReceived]);

    return null;
};

export default TokenExchange;