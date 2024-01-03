import React, { useState } from "react";

const furniture_data = [
  {
    id: 1,
    type: "Chairs",
    images: [
      "images/t-1.jpg",
      "images/t-2.jpg",
      "images/t-3.jpg",
      "images/t-4.jpg",
    ],
  },
  {
    id: 2,
    type: "Tables",
    images: [
      "images/t-2.jpg",
      "images/t-3.jpg",
      "images/t-4.jpg",
      "images/t-1.jpg",
    ],
  },
  {
    id: 3,
    type: "Bads",
    images: [
      "images/t-3.jpg",
      "images/t-4.jpg",
      "images/t-1.jpg",
      "images/t-2.jpg",
    ],
  },
  {
    id: 4,
    type: "Furnitures",
    images: [
      "images/t-1.jpg",
      "images/t-3.jpg",
      "images/t-2.jpg",
      "images/t-4.jpg",
    ],
  },
];

const Furniture = () => {
  const [tab, setTab] = useState();
  
  return (
    <section className="furniture_section layout-padding">
      <div className="details_box">
        <h1 className="heading">
          Trending Categories
          <span></span>
        </h1>

        <div className="tab-container">
          {furniture_data.map((item) => (
            <div className="t-link-box" key={item.id}>
              <h1>
                {`0${item.id}`}
                <span></span>
              </h1>
              <h1>{item.type}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="accordian_images flex-center">
        <div className="box b-1">
          <div className="image-box">
            <img src="images/t-1.jpg" alt="" />
          </div>
          <div className="image-box">
            <img src="images/t-2.jpg" alt="" />
          </div>
        </div>

        <div className="box b-2">
          <div className="image-box">
            <img src="images/t-3.jpg" alt="" />
          </div>
          <div className="image-box">
            <img src="images/t-4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniture;
