import React, { Component } from "react";

export default class CarItem extends Component {
  render() {
    let { name, img, price } = this.props.propsCarItem;
    let inForCarItem = this.props.propsCarItem

    return (
      <div className="card text-start">
        <img className="card-img-top" src={img} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price}</p>
          <button
            type="button"
            className="btn btn-success btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={()=>{
            this.props.propshandleChangeModal(inForCarItem)
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
