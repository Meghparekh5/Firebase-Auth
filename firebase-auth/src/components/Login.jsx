import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <p>Sign in to continue</p>
        <button className="btn" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;