import React, { Component } from "react";

export default class card extends Component {
  render() {
    const {title, text, imgSrc, iconSrc} = this.props.item;
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="icons">
                {
                    iconSrc.map(e => {
                        return <img key={e} src={e} alt="" />
                    })
                }
            </div>
            <img src={imgSrc} className="imgProject" alt="" />
            <img src="img/icons/checked.png" className="check" alt="" />
        </div>
    )
  }
}
