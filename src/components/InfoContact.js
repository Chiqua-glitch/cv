import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { infoContactDate } from "../data/dataContact";
import { infoContactNetwork } from "../data/dataContact";

const InfoContact = () => {
  return (
    <aside>
      <div>
        <img src="img/rose.png" className="myPicture" alt="" />
        <p className="myName">quentin chéron</p>
        {infoContactDate.map((e) => {
          return (
            <div className={e.type} key={e.type}>
              <img src={e.iconSrc} alt="" />
              <div>
                <p>{e.type}</p>
                <CopyToClipboard text={e.content}>
                  <p className="copy">{e.content}</p>
                </CopyToClipboard>
              </div>
            </div>
          );
        })}
      </div>
      <div className="icons">
        {infoContactNetwork.map((e) => {
          return (
            <a key={e.id} href={e.link} target="_blank" rel="noreferrer">
              <img src={e.srcNetwork} alt="" />;
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default InfoContact;
