import React from "react";
import { brands_data } from "../data";

const Card = ({ product, img, isNew, price }) => {
  return (
    <>
      {isNew && <span>New</span>}
      <img src={img} />
      <h6 className="price">${price}</h6>
      <h6>{product}</h6>
    </>
  );
};

const Featured = () => {
  return (
    <section className="featured_products">
      <h1>
        Featured Brands <span></span>
      </h1>
      <div className="brand-container flex-center">
        {brands_data.map((item) => (
          <div className="brand_box" key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>
      <button className="black">See More</button>
    </section>
  );
};

export default Featured;
