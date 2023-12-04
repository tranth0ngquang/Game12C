import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    
    let {hinhAnh,giaBan,tenSP} = this.props.propsDataPhoneItem
    let {propsDataPhoneItem} = this.props
    return (
      <div className="card text-center" style={{height:'550px'}}>
        <img className="card-img-top" style={{height:'420px'}} src={hinhAnh} alt="Title" />
        <div className="card-body"  style={{height:'130px'}}>
          <h4 className="card-title">{giaBan}</h4>
          <p className="card-text">{tenSP}</p>
          <button className="btn btn-success" onClick={()=>{
            this.props.propsFhandleChangeInfo(propsDataPhoneItem)
          }}>Xem chi tiết</button>
        </div>
      </div>
    );
  }
}
