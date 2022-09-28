import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";

const Resume = () => {
  return (
    <div className="group-aside-page">
      <InfoContact />
      <div id="principal-page" className="resume-page">
        <header>
          <h1>resume</h1>
          <Navigation />
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default Resume;
