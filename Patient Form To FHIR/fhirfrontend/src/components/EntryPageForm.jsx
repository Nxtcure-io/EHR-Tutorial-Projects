import { useNavigate } from "react-router-dom";
import "../styles/EntryPage.css";

function EntryPageForm() {
  const navigate = useNavigate();

  return (
    <div className="entry-page-container">
      <div className="button-container">
        <button className="login-button" onClick={() => navigate("/login")}>
          LOGIN
        </button>
      </div>
      <div className="button-container">
        <button
          className="register-button"
          onClick={() => navigate("/register")}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default EntryPageForm;
