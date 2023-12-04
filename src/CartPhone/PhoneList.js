import React, { Component } from "react";
import PhoneItem from "./PhoneItem";

export default class PhoneList extends Component {
  renderPhoneItem = () => {
    return this.props.propsdataListPhone.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <PhoneItem
            propshandleAddToCart={this.props.propshandleAddToCart}
            propsDatePhoneItem={item}
          />
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
