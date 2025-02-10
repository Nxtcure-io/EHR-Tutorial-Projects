import '../styles/SignInButton.css';

const SignInButton = ({onClick}) => {
    return(
        <div className="button-container">
            <button className="sign-in-button" onClick={onClick}>
            Sign in with EPIC
            </button>
        </div>
    );
};

export default SignInButton;