import React, { Component } from "react";

export default class PhoneItem extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.propsDatePhoneItem;
    let itemPhone = this.props.propsDatePhoneItem;
    return (
      <div className="card text-start" style={{ height: "550px" }}>
        <img
          className="card-img-top"
          style={{ height: "420px" }}
          src={hinhAnh}
          alt="Title"
        />
        <div className="card-body" style={{ height: "130px" }}>
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">Giá bán: {giaBan.toLocaleString()}</p>

          <button
            className="btn btn-success"
            onClick={() => {
              this.props.propshandleAddToCart(itemPhone);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
