import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous recherchez n'existe pas.</h2>
      <Link to="/" className="link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
