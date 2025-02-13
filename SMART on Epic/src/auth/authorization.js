// Construct the endpoint URL
export function authURL(authorization, redirect, client_id, code_challenge, base_url){

    // https://fhir.epic.com/interconnect-fhir-oauth/oauth2/authorize?
    // scope=launch
    // &response_type=code
    // &redirect_uri=[redirect_uri]
    // &client_id=[client_id]
    // &launch=[launch_token]
    // &state=[state]
    // &code_challenge=[code_challenge]
    // &code_challenge_method=S256&
    // aud=[audience]

    const authURL = `${authorization}?` +
        `scope=launch&` +
        `response_type=code&` +
        `redirect_uri=${encodeURIComponent(redirect)}&` +
        `client_id=${encodeURIComponent(client_id)}&` +
        `launch=&` +
        `state=${Math.random.toString(36).substring(7)}&` +
        `code_challenge=${code_challenge}&` +
        `code_challenge_method=S256&` +
        `aud=${encodeURIComponent(base_url)}`;
    return authURL
}