import React from "react";
import About from "./About";
import Carousel from "../components/Carousel";
import Furniture from "./Furniture";
import Discount from "./Discount";
import Featured from "./Featured";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main className="hero_area">
      <div className="play_button">
        <a href="#" className="play flex-center">
          <img src="images/play.png" alt="" />
        </a>
        <span className="bg-play-button"></span>
      </div>

      <div className="container">
        <Carousel autoplayInterval={2000} />
      </div>

      <About />
      <Furniture />
      <Discount />
      <Featured />
      <Contact />
      <Testimonials />
    </main>
  );
};

export default Home;
