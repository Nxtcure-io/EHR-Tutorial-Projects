// List of all endpoints
export const CONFIG = {
    ISSUER: '',
    ACCESS_TOKEN: '',
    CODE_CHALLENGE: '',
    CODE_VERIFIER: '',
    AUTHORIZATION_ENDPOINT: '',
    TOKEN_ENDPOINT: '',
    CLIENT_ID: 'a56411ee-67d8-43be-a181-1ef625da3c64',
    REDIRECT_URI: 'http://localhost:5173/callback',
    FHIR_BASE_URL: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4'
};

// Function to update multiple values at once
export function setWellKnown(authorization, token, issuer) {
    CONFIG.AUTHORIZATION_ENDPOINT = authorization;
    CONFIG.TOKEN_ENDPOINT = token;
    localStorage.setItem('token_endpoint', token);
    CONFIG.ISSUER = issuer;
    localStorage.setItem('issuer', issuer);
}

export function setToken(access){
    CONFIG.ACCESS_TOKEN = access;
}

export function setChallenge(code_challenge, code_verifier){
    CONFIG.CODE_CHALLENGE = code_challenge;
    CONFIG.CODE_VERIFIER = code_verifier;
    localStorage.setItem('code_verifier', code_verifier);
}

// Function to get all variables
export function getVariables() {
    return CONFIG;
}