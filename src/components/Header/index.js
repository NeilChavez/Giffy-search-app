import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    //TODO come to this point from the backend answer
  const isLogged = false;
  return (
    <header className="gf-header">
      {isLogged ? (
        <Link to="/login">Logout</Link>
      ) : (
        <>
        
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>
        
      )}
   
    </header>
  );
}
