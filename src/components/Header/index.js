import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <header className="gf-header">
            <Link to="/login">Login</Link>
        </header>
    )
}