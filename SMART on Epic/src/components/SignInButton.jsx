import React from "react";
import "../styles/SignIn.css";

function SignIn({ handleSignIn }) {
    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2>Welcome to the SMART on Epic FHIR Portal</h2>
                <p>Access your health data securely and efficiently.</p>
                <button className="signin-button" onClick={handleSignIn}>
                    Sign In with Epic
                </button>
            </div>
        </div>
    );
}

export default SignIn;