import React, { Component } from "react";
import { KnowledgeData } from "../../data/resume/knowledges";

export default class Langages extends Component {
  state = {
    years: 5,
    knowledgesData: KnowledgeData,
  };
  render() {
    const {
      langages,
      framework,
      cms,
      otherKnowledges,
      academicLanguage,
      capacityAcademic,
      certification,
    } = this.state.knowledgesData;
    let totalYears = [];
    for (let i = 1; i < this.state.years + 1; i++) {
      totalYears.push(
        <p
          className="years"
          style={{ width: this.state.years * 5 + "%" }}
          key={i}
        >
          {i}ans
        </p>
      );
    }
    return (
      <div className="knowledges">
        <h3>Langages</h3>
        <div className="allWithoutAcademic">
          <div className="totalYears">{totalYears}</div>
          <div className="langages">
            <ul>
              {langages.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <span
                      className="knowledgesBorder"
                      style={{
                        width: item.experience * 17 + "%",
                      }}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="framework">
            <h3>Framework</h3>
            <ul>
              {framework.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <span
                      className="knowledgesBorder"
                      style={{
                        width: item.experience * 17 + "%",
                      }}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cms">
            <h3>Cms</h3>
            <ul>
              {cms.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <span
                      className="knowledgesBorder"
                      style={{
                        width: item.experience * 17 + "%",
                      }}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="otherKnowledges">
            <h3>Autres comp??tences</h3>
            <ul>
              {otherKnowledges.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <span
                      className="knowledgesBorder"
                      style={{
                        width: item.experience * 17 + "%",
                      }}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="academicLanguage">
          <h3>Comp??tences acad??mique</h3>
          <div>
            {academicLanguage.map((item) => {
              return (
                <div key={item.type}>
                  <h4 key="title">{item.type}</h4>
                  <span
                    className="knowledgesBorder"
                    style={{
                      width: item.experience * 20 + "%",
                    }}
                  ></span>

                  <ul>
                    {capacityAcademic.map((e) => {
                      return (
                        <li
                          key={e}
                          style={{ width: item.experience * 10 + "%" }}
                        >
                          {e}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="certification">
          <h3>Certification</h3>
          <ul>
            {certification.map((item) => {
              return (
                <li key={item}>
                  {item}
                  <img src="img/icons/checkbox.png" alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
