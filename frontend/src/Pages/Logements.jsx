import React from "react";
import { useParams, Navigate } from "react-router-dom";
import LogementData from "../../../backend/logements.json";
import Slider from "../Components/Slider.jsx";

function Logements() {
  const { id } = useParams();

  const currentHousing = LogementData.find((item) => item.id === id);

  if (!currentHousing) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="logements">
      <Slider pictures={currentHousing.pictures} />
      <h1>{currentHousing.title}</h1>
      <p>{currentHousing.location}</p>
    </div>
  );
}

export default Logements;
