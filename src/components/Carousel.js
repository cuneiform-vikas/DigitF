import React, { useCallback, useEffect, useState } from "react";
import { carousel_data } from "../data";

const Carousel = ({ num, setNum, autoplayInterval, showIndicators = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carousel_data.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carousel_data.length) % carousel_data.length
    );
  }, []);

  useEffect(() => {
    if (autoplayInterval) {
      const autoplay = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(autoplay);
    }
  }, [autoplayInterval, handleNext]);

  const currentTransform = -activeIndex * 100;

  // ______ Keyoboard Navigation ________
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  // _______ Pagination Indicator _______
  const renderPaginationIndicatiors = () => {
    return carousel_data.map((_, index) => (
      <button
        key={index}
        className={`pagination-indicator ${
          index === activeIndex ? "active" : ""
        }`}
        onClick={() => {
          setActiveIndex(index);
          setNum(index);
        }}
      ></button>
    ));
  };
  return (
    <section
      className="carousel-wrapper"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-live="polite"
      aria-roledescription="carousel"
    >
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {carousel_data.map((item, i) => (
          <>
            <div className="carousel-item-details">
              <h2>{item.subtitle}</h2>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <div className="btn-box">
                <button className="green">Read More</button>
                <button className="black">Contact Us</button>
              </div>
            </div>

            <div className="item">
              <img src={item.img} alt="" />
            </div>
          </>
        ))}
      </div>

      {/* _____pagination indicator function_____ */}
      {showIndicators && (
        <div className="pagination-indicators">
          {renderPaginationIndicatiors()}
        </div>
      )}
    </section>
  );
};

export default Carousel;
