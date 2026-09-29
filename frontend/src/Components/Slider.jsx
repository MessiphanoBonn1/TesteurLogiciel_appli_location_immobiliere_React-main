import logements from "../../../backend/logements.json";

function slider() {
  return (
    <section className="slider">
      {logements.map((logement) => (
        <img src={logement.pictures} />
      ))}
    </section>
  );
}

export default slider;
