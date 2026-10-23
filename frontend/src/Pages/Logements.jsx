import { useParams, Navigate } from "react-router-dom";
import LogementData from "../../../backend/logements.json";
import Slider from "../Components/Slider.jsx";
import Textlogements from "../Components/textlogement.jsx";
import Collapse from "../Components/Collapse.jsx";
import "./Logements.scss";

function Logements() {
  const { id } = useParams();

  const currentHousing = LogementData.find((item) => item.id === id);

  if (!currentHousing) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className="logements">
      <Slider pictures={currentHousing.pictures} />
      <Textlogements />
      <div className="collpaselogeme">
        <div className="collapse-logements">
          <Collapse
            title="Description"
            content={currentHousing.description}
            className="logements-collapse"
          />
        </div>
        <div className="collapse-logements">
          <Collapse
            title="Équipements"
            content={currentHousing.equipments.join(", ")}
            className="logements-collapse"
          />
        </div>
      </div>
    </section>
  );
}

export default Logements;
