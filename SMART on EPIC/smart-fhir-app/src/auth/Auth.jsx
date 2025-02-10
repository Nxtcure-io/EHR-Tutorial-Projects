export const handleSignIn = (config) => {
    if (!config) {
        console.error("SMART config is not loaded");
        return;
    }

    const client_id = import.meta.env.VITE_CLIENT_ID;
    const response_type = "code";
    const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
    const scope = "launch openid profile fhirUser";
    const state = Math.random().toString(36).substring(7);

    const authURL = `${config.authorizationEndpoint}?
        scope=${encodeURIComponent(scope)}&
        response_type=${response_type}&
        redirect_uri=${encodeURIComponent(redirect_uri)}&
        client_id=${client_id}&
        state=${state}`;

    window.location.href = authURL;
};
export default handleSignIn;