import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";

const Portfolio = () => {
  return (
    <div className="selectAllPage">
      <InfoContact />
      <div id="principal-page" className="portfolio-page">
        <header>
          <div className="full-nav">
            <h1>portfolio</h1>
            <Navigation />
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default Portfolio;
