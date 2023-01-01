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
      // console.log("log out eseuito correttamente");
    } catch (err) {
      console.warn(err);
      // console.log("log out  qualcosa e andato storto");
    }
  };
  return (
    <header className="gf-header container">
      <nav className="App-nav">
        <div>
          <Link className="Link-home" to="/">
            <h1>
              Giffy Search App
            </h1>
          </Link>
        </div>

        <div className="login-out-wrapper">
          {isLogged ? (
            <Link to="/login" className="btn " onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/register" className="btn btn-logout">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
