import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const InfoContact = () => {
  return (
    <aside>
      <div>
        <img src="img/rose.png" className="myPicture" alt="" />
        <p className="myName">quentin chéron</p>
        <div className="email">
          <img src="img/icons/Mail.png" alt="" />
          <div>
            <p>email</p>
            <CopyToClipboard text="Quentin.cheron26200@hotmail.com"><p className="copy">Quentin.cheron26200@hotmail.com</p></CopyToClipboard>
          </div>
        </div>
        <div className="phone">
          <img src="img/icons/Phone.png" alt="" />
          <div>
            <p>phone</p>
            <CopyToClipboard text="0616085393"><p className="copy">06 16 08 53 93</p></CopyToClipboard>
          </div>
        </div>
        <div className="adress">
          <img src="img/icons/Adress.png" alt="" />
          <div>
            <p>adress</p>
            <CopyToClipboard text="5 rue rabelais 26200 Montélimar"><p className="copy">5 rue rabelais 26200 Montélimar</p></CopyToClipboard>
          </div>
        </div>
      </div>
      <div className="icons">
        <a href="#">
          <img src="img/icons/twitter.png" alt="" />
        </a>
        <a href="#">
          <img src="img/icons/instagram.png" alt="" />
        </a>
        <a href="#">
          <img src="img/icons/Github.png" alt="" />
        </a>
      </div>
    </aside>
  );
};

export default InfoContact;
