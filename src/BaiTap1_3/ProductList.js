import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderShoesItem = () => {
    return this.props.propsDataShoes.map((item, index) => {
      return (
        <div className="col-4 w3-animate-zoom" key={index} >
          <ProductItem propsDataItem={item} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderShoesItem()}</div>;
  }
}
