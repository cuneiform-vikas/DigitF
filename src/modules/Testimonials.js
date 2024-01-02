import React from "react";
import { testimonials } from "../data";

const Client = ({ img, name, designation, desc }) => {
  return (
    <div className="client">
      <div className="client-info">
        <img src={img} alt="" className="client-img" />
        <div className="name">
          <h2>{name}</h2>
          <h3>{designation}</h3>
        </div>
      </div>

      <p>{desc}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="arrow"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="client_section container">
      <h1 className="heading">
        Testimonials
        <span></span>
      </h1>

      <div className="client-container">
        {testimonials.map((user) => (
          <Client key={user.id} {...user} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
