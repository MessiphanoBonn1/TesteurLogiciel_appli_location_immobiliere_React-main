import logements from "../../../backend/logements.json";
import Card from "./Card.jsx";
import "./Cards.scss";

function Cards() {
  return (
    <section className="cards">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </section>
  );
}

export default Cards;
