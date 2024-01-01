import React from "react";

const About = () => {
  return (
    <main className="about_section flex-center">
      <div>
        <h1 className="flex-center">
          About Us
          <span></span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <button className="black">Read More</button>
      </div>
      <div>
        <img src="images/about-img.png" alt="" />
      </div>
    </main>
  );
};

export default About;
