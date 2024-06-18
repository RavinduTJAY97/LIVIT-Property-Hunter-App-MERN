import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "http://localhost:3000/assets/imgs/ap1_1.jpg",
    "http://localhost:3000/assets/imgs/ap1_2.jpg",
    "http://localhost:3000/assets/imgs/ap1_4.jpg",
  ];

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  const controlButtonStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    zIndex: "1",
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        maxHeight: "600px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <button
        onClick={goToPreviousSlide}
        style={controlButtonStyles}
        className="control-button prev-button"
      >
        Prev
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={imageStyles}
        className="slide"
      />
      <button
        onClick={goToNextSlide}
        style={controlButtonStyles}
        className="control-button next-button"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
