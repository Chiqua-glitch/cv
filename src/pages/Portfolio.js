import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";

const Portfolio = () => {
  return (
    <div className="group-aside-page">
      <InfoContact />
      <div id="principal-page" className="portfolio-page">
        <header>
          <h1>portfolio</h1>
          <Navigation />
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default Portfolio;
