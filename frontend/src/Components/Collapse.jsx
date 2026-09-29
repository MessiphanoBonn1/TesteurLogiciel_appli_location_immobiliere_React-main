import React, { useState } from "react";
import ArrowIcon from "../assets/svg/arrow.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="title">{title}</h3>
        <img
          src={ArrowIcon}
          alt="Flèche d'ouverture"
          className={`arrow-icon ${isOpen ? "arrow-icon--rotated" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
