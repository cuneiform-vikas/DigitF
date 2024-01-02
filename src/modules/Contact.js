import React from "react";

const Contact = () => {
  return (
    <section className="contact_section container layout-padding">
      <h1 className="heading">
        Contact Us
        <span></span>
      </h1>
      <div className="contact-container">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Number" required />
          <textarea placeholder="Message" className="message-box" required />
          <button className="green">
            Send
          </button>
        </form>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
