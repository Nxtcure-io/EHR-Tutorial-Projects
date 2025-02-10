import { useState, useEffect } from 'react'
import fetchSmartConfig from './config/smartConfig';
import SignInButton from './components/SignInButton';
import TokenExchange from "./components/TokenExchange";
import PatientInfo from "./components/PatientInfo";
import handleSignIn from "./auth/Auth";
import './App.css'

function App() {
    const [config, setConfig] = useState(null);
    const [authCode, setAuthCode] = useState(null);
    const [token, setToken] = useState(null);

    const FHIR_BASE_URL = import.meta.env.VITE_FHIR_BASE_URL;

    useEffect(() => {
        const loadConfig = async () => {
            const fetchedConfig = await fetchSmartConfig();
            if (fetchedConfig) setConfig(fetchedConfig);
        };
        loadConfig();

        // Get authorization code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        if (code) {
            setAuthCode(code);
        }
    }, []);

    return (
        <div>
            <SignInButton onClick={() => handleSignIn(config)} />
            {authCode && <TokenExchange authCode={authCode} config={config} onTokenReceived={setToken} />}
            {token && <PatientInfo accessToken={token} fhirBaseUrl={FHIR_BASE_URL} />}
        </div>
    );
}

export default App;
