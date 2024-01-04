import React, { useState } from "react";
import { furniture_data } from "../data";

const Furniture = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentTransform = -activeTab * 525;

  const handleClick = (id) => {
    // setClicked(true);
    setActiveTab(id);
  };

  return (
    <section className="furniture_section">
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
              <h1
                // className={clicked ? "clicked" : ""}
                onClick={() => handleClick(item.id)}
              >
                {item.type}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="accordian">
        <div
          className="accordian-images"
          style={{ transform: `translateY(${currentTransform}px)` }}
        >
          {furniture_data.map((item, i) => (
            <div className="image_box" key={i}>
              {item.images.map((source, i) => (
                <img key={i} src={source} alt="" className="accordian_image" />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="accordian_images flex-center">
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
      </div> */}
    </section>
  );
};

export default Furniture;
