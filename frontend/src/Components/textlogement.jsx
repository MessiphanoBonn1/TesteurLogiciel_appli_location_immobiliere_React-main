import { useParams } from "react-router-dom";
import LogementData from "../../../backend/logements.json";
import "./textlogement.scss";

function Textlogements() {
  const { id } = useParams();

  const currentHousing = LogementData.find((item) => item.id === id);

  return (
    <div className="textlogement">
      <div className="info">
        <h1>{currentHousing.title}</h1>
        <p>{currentHousing.location}</p>
        {currentHousing.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="host">
        <p>{currentHousing.host.name}</p>
        <img src={currentHousing.host.picture} alt={currentHousing.host.name} />
      </div>
    </div>
  );
}

export default Textlogements;
