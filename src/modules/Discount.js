import React from "react";

const Discount = () => {
  return (
    <section className="discount_section flex-center layout-padding">
        <div className="detail-box">
          <h2>The Latest Collection</h2>
          <h2 className="main-heading">50% Discount</h2>
          <button className="black">Buy Now</button>
        </div>
        <div className="image-box">
          <img src="images/discount-img.png" alt="" />
        </div>
    </section>
  );
};

export default Discount;
