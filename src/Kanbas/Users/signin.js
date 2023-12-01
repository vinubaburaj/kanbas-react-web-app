import * as service from "./service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    const response = await service.signin(credentials);

    // Checking if user could be fetched, then navigating to their profile page
    if(response){
        navigate("/Kanbas/account");
    }

  };
  return (
    <div>
      <h1>Signin</h1>
      <input
        value={credentials.username}
        className="form-control"
        placeholder="Username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        value={credentials.password}
        className="form-control"
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button className="btn btn-primary mt-2" onClick={signin}>
        {" "}
        Sign In{" "}
      </button>
    </div>
  );
}
export default Signin;
