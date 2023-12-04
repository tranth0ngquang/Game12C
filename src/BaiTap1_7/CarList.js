import React, { Component } from "react";
import CarItem from "./CarItem";

export default class CarList extends Component {
  renderCarItem = () => {
    return this.props.propsCarList.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <CarItem
            propshandleChangeModal={this.props.propshandleChangeModal}
            propsCarItem={item}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderCarItem()}</div>;
  }
}
