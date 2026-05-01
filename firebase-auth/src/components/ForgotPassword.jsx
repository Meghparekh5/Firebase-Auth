import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const reset = async () => {
    if (!email) return alert("Enter email");

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset email sent successfully");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Reset Password</h3>

        <input placeholder="Enter email" onChange={e => setEmail(e.target.value)} />

        <button className="btn" onClick={reset}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;