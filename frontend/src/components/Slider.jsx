import { useEffect, useState, useRef, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Data";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  const intervalTime = 5000;
  const slideIntervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide) => (currentSlide === slideLength - 1 ? 0 : currentSlide + 1));
  }, [slideLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((currentSlide) => (currentSlide === 0 ? slideLength - 1 : currentSlide - 1));
  }, [slideLength]);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideIntervalRef.current = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideIntervalRef.current);
  }, [currentSlide, autoScroll, nextSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <hr />
                  <Link to="/Shop" className="btn-shop">
                    Shop Now
                  </Link>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
