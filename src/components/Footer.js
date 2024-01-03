import React from "react";
import CopyRight from "../modules/CopyRight";

const instabox = [
  {
    src: "/images/i-1.jpg",
    link: "https://vikasparmar.vercel.app/",
  },
  {
    src: "images/i-2.jpg",
    link: "https://vikasparmar.vercel.app/",
  },
  {
    src: "images/i-3.jpg",
    link: "https://vikasparmar.vercel.app/",
  },
  {
    src: "images/i-4.jpg",
    link: "https://vikasparmar.vercel.app/",
  },
  {
    src: "images/i-5.jpg",
    link: "https://vikasparmar.vercel.app/",
  },
  {
    src: "images/i-6.jpg",
    link: "https://vikasparmar.vercel.app/",
  },
];
const Footer = () => {
  return (
    <>
      <footer className="info-section">
        <div className="info-logo">
          <h2>DigitF</h2>
        </div>

        <div className="info">
          <div className="footer-details">
            <div className="info_contact">
              <h5>About Shop</h5>
              <div>
                <div className="img-box">
                  <img src="images/location-white.png" width="18px" alt="" />
                </div>
                <p>Address</p>
              </div>
              <div>
                <div className="img-box">
                  <img src="images/telephone-white.png" width="12px" alt="" />
                </div>
                <p>+01 1234567890</p>
              </div>
              <div>
                <div className="img-box">
                  <img src="images/envelope-white.png" width="18px" alt="" />
                </div>
                <p>demo@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="footer-details">
            <div className="info_info">
              <h5>Informations</h5>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>

          <div className="footer-details">
            <div className="info_insta">
              <h5>Instagram</h5>
              <div className="insta_container">
                <img src="/images/i-1.jpg" />
                <img src="/images/i-2.jpg" />
                <img src="/images/i-3.jpg" />
                <img src="/images/i-4.jpg" />
                <img src="/images/i-5.jpg" />
                <img src="/images/i-6.jpg" />
              </div>
            </div>
          </div>

          <div className="footer-details">
            <div className="info_form">
              <h5>Newsletter</h5>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <button className="green"> Subscribe</button>
              </form>
              <div className="social_box">
                <a href="">
                  <img src="images/fb.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/linkedin.png" alt="" />
                </a>
                <a href="">
                  <img src="images/youtube.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
};

export default Footer;
