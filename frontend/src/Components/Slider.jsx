import { useState } from "react";
import "./Slider.scss";
import ArrowLeft from "../assets/svg/Arrow-left.svg";
import ArrowRight from "../assets/svg/Arrow-rigth.svg";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures ? pictures.length : 0;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1,
    );
  };

  if (totalPictures === 0) {
    return null;
  }

  return (
    <div className="carrousel">
      <img
        src={pictures[currentIndex]}
        alt={`Logement photo ${currentIndex + 1}`}
        className="carrousel-img"
      />
      {totalPictures > 1 && (
        <>
          <img
            src={ArrowLeft}
            alt="Précédente"
            className="carrousel-arrow carrousel-arrow-left"
            onClick={prevSlide}
          />
          <img
            src={ArrowRight}
            alt="Suivante"
            className="carrousel-arrow carrousel-arrow-right"
            onClick={nextSlide}
          />
          <span className="carrousel-counter">
            {currentIndex + 1}/{totalPictures}
          </span>
        </>
      )}
    </div>
  );
}

export default Slider;
