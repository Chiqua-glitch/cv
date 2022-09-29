import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";
import { dataPassion } from "../data/dataAboutMe";

const QuiSuisJe = () => {
  return (
    <div className="selectAllPage">
      <InfoContact />
      <div id="principal-page">
        <header>
          <div className="full-nav">
            <h1>Qui suis-je ?</h1>
            <Navigation />
          </div>
        </header>
        <main>
          <p className="moreInfoAboutMe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            eaque libero aut reprehenderit quos nobis sapiente rerum aspernatur
            aperiam earum, error fugiat temporibus excepturi id omnis nisi
            laudantium harum est? Nam dolorem necessitatibus quos deleniti
            accusantium ducimus aut voluptatum consequuntur. Eligendi repellat
            tempore voluptatem, distinctio itaque quod officia quibusdam iusto
            ipsum minima animi consequatur, atque vel nulla dolore maiores eius?
          </p>
          <h2>Quelles sont mes passions ?</h2>

          <div className="group-passion">
            {dataPassion.map((e) => {
              return (
                <div key={e.id} className="content-passion">
                  <img src={e.icon} alt="" />
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuiSuisJe;
