import React, { useState } from "react";
import About from "./About";
import Carousel from "../components/Carousel";

const Home = () => {
  const [num, setNum] = useState(1);

  return (
    <main className="hero_area">
      <div className="play_button">
        <a href="#" className="play flex-center">
          <img src="images/play.png" alt="" />
        </a>
        <span className="bg-play-button"></span>
      </div>

      <div className="number_box">{num}</div>
      <Carousel autoplayInterval={3000} num={num} setNum={setNum} />

      <About />
    </main>
  );
};

export default Home;
