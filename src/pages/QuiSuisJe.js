import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";

const QuiSuisJe = () => {
  return (
    <div className="group-aside-page">
      <InfoContact />
      <div id="principal-page" className="howIAm-page">
        <header>
          <h1>Qui suis-je ?</h1>
          <Navigation />
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default QuiSuisJe;
