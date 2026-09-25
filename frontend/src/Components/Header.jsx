import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styles/_variables.scss";
import "../Components/Header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
