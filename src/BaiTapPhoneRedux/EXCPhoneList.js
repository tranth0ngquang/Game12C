import React, { Component } from "react";
import dataPhone from "../Data/dataPhone.json";
import EXCPhoneItem from "./EXCPhoneItem";
export default class EXCPhoneList extends Component {
  renderPhoneItem = () => {
    return dataPhone.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <EXCPhoneItem propsdataPhoneItem={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPhoneItem()}</div>
      </div>
    );
  }
}
