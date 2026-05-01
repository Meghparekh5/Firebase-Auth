import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Login</h3>

        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button className="btn" onClick={login}>Login</button>
        <button className="btn" onClick={googleLogin}>Google</button>

        <Link className="link" to="/signup">Signup</Link>
        <Link className="link" to="/forgot">Forgot Password</Link>
      </div>
    </div>
  );
}

export default Login;