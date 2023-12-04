import React, { Component } from "react";

export default class ProductItem extends Component {
    
  render() {
    let { image, name, price } = this.props.propsDataItem;

    return (
      <div className="card text-start" >
        <img className="card-img-top" src={image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price}</p>
        </div>
        <button className="btn btn-success">Add to cart</button>
      </div>
    );
  }
}
