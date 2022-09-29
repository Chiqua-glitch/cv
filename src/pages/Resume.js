import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";

const Resume = () => {
  return (
    <div className="group-resume-page selectAllPage">
      <InfoContact />
      <div id="principal-page" className="resume-page">
        <header>
          <div className="full-nav">
            <h1>resume</h1>
            <Navigation />
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default Resume;
