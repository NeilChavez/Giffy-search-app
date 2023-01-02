import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {useUser} from "../../hooks/useUser"
import "./Header.css";

export default function Header() {

  const { user: isLogged } = useAuth();
  const {logout} = useUser()

  const handleLogout = () => {
  logout(); 
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
            <Link to="/" className="btn " onClick={handleLogout}>
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
