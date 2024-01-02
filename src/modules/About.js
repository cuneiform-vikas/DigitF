import React from "react";

const About = () => {
  return (
    <section className="about_section layout-padding">
      <div className="container flex-center">
        <div className="about-detail">
          <h1>
            About Us
            <span></span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <button className="black">Read More</button>
        </div>

        <div className="about-image">
          <img src="images/about-img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
