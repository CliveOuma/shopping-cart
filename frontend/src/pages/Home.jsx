import React, { useEffect } from "react";
import { Slider, Navbar, Footer } from "../components";
import "./Slider.css"

const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);




  return (
    <div>
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;