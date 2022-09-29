import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";

const Contact = () => {
  return (
    <div className="group-contact-page selectAllPage">
      <InfoContact />
      <div id="principal-page" className="contact-page">
        <header>
          <div className="full-nav">
            <h1>contact</h1>
            <Navigation />
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default Contact;
