import { useParams } from "react-router-dom";
import LogementData from "../../../backend/logements.json";
import "./textlogement.scss";
import staractive from "../assets/images/star-active.png";
import starinactive from "../assets/images/star-inactive.png";

function Textlogements() {
  const { id } = useParams();

  const currentHousing = LogementData.find((item) => item.id === id);
  const rating = parseInt(currentHousing.rating, 10);
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="alltext">
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
        <div className="hosttext">
          <p>{currentHousing.host.name}</p>
          <img
            src={currentHousing.host.picture}
            alt={currentHousing.host.name}
          />
        </div>
        <div className="rating">
          {range.map((rangeElem) => (
            <img
              key={rangeElem}
              src={rangeElem <= rating ? staractive : starinactive}
              alt="star"
              className="star"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Textlogements;
