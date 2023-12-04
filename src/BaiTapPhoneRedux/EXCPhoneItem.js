import React, { Component } from "react";
import { connect } from "react-redux";

class EXCPhoneItem extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.propsdataPhoneItem;

    return (
      <div className="card text-start" style={{ height: "550px" }}>
        <img
          className="card-img-top"
          src={hinhAnh}
          alt="Title"
          style={{ height: "420px" }}
        />
        <div className="card-body" style={{ height: "130px" }}>
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button className="btn btn-success" onClick={()=>{
            this.props.handleThemGioHang(this.props.propsdataPhoneItem)
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

// hàm gửi dữ liệu và yêu cầu lên store để store xử lý
const mapDispatchToProps = (dispatch) => {
  return {
    handleThemGioHang: (item) => {
      dispatch({
        type: "THEM_GIO_HANG",
        item,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(EXCPhoneItem);
