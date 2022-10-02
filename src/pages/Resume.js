import React, { Component } from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";
import Evolution from "../components/resume/Evolution";

export default class Resume extends Component {
  render() {
    return (
      <div className="selectAllPage">
        <InfoContact />
        <div id="principal-page" className="resume-page">
          <header>
            <div className="full-nav">
              <h1>resume</h1>
              <Navigation />
            </div>
          </header>
          <main>
            <p className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              expedita provident voluptates cupiditate rerum assumenda non
              nostrum reiciendis maxime? Neque amet porro cumque distinctio
              officia accusamus pariatur? Quas, quo nemo. Iste, labore veniam.
              Architecto maiores odit quia dignissimos placeat veritatis nihil
              ipsa ab modi et, ad, non cupiditate sint eos repellendus magnam.
              Laudantium repellendus pariatur voluptas error dolorem enim nobis!
            </p>
            <h2>Mon Évolution</h2>
            <Evolution />
            <h2>Mes compétences</h2>
            <h3>Langages</h3>
          </main>
        </div>
      </div>
    );
  }
}
