import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar({ user }) {
  return (
    <div className="navbar">
      <h2 style={{ letterSpacing: "3px" }}> firebase-auth</h2>
      {user && (
        <button className="btn" style={{ width: "120px" }} onClick={() => signOut(auth)}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;