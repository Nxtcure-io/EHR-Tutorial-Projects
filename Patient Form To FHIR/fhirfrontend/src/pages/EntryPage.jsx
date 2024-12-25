import Login from "./Login";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

function EntryPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button className="login-button" onClick={() => navigate("/login")}>
          LOGIN
        </button>
      </div>
      <div>
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

export default EntryPage;
