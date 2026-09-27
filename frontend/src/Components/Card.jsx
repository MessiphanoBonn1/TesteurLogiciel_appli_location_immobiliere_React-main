import { Link } from "react-router-dom";
import "../Components/Card.scss";
import "../styles/_variables.scss";

function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link
        to={`/logement/${id}`}
        className="cardLink"
        style={{ "--bg-cover": `url(${cover})` }}
      >
        <h2 className="card__title">{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
