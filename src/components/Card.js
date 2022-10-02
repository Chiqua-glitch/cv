import React, { Component } from "react";

export default class card extends Component {
  state = {
    showInfo: false,
  };
  moreInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { title, text, imgSrc, iconSrc, sourceCode } = this.props.item;
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="icons">
          {iconSrc.map((e) => {
            return <img key={e} src={e} alt="" />;
          })}
        </div>
        <img src={imgSrc} className="imgProject" alt="" />
        <img
          src="img/icons/checked.png"
          className="check"
          alt=""
          onClick={this.moreInfo}
        />
        {this.state.showInfo && (
          <div className="showInfo">
            <img src="img/icons/checked.png" alt="" onClick={this.moreInfo} />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={sourceCode} target="_blank">Code source</a>
          </div>
        )}
      </div>
    );
  }
}
