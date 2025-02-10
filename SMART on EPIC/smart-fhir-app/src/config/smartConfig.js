const fetchSmartConfig = async () => {
    const wellKnownUrl = import.meta.env.VITE_FHIR_WELL_KNOWN;
    
    try {
        const response = await fetch(wellKnownUrl)
        if(!response.ok) {
            throw new Error("Failed to fetch SMART configuration");
        }
        const config = await response.json()

        return{
            authorizationEndpoint: config.authorization_endpoint,
            tokenEndpoint: config.token_endpoint,
            issuer: config.issuer,
            jwksUri: config.jwks_uri,
        };
    } catch (error) {
        console.log("Error fetching SMART configuration:", error);
        return null;
    }
};
export default fetchSmartConfig;