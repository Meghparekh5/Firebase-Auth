import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar({ user }) {
  return (
    <div className="navbar">
      <h3>Auth System</h3>
      {user && (
        <button className="logout" onClick={() => signOut(auth)}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;