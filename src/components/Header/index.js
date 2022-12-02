import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Header.css";

export default function Header() {
  //TODO come to this point from the backend answer
  // yes, I did it 
  const { user: isLogged, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("log out eseuito correttamente");
    } catch (err) {
      console.warn(err);
      console.log("log out  qualcosa e andato storto");
    }
  };
  return (
    <header className="gf-header">
      {isLogged ? (
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </header>
  );
}
