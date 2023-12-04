import React, { Component } from "react";
import { connect } from "react-redux";

class EXCPhoneModal extends Component {
  renderTongSoLuong = () => {
    return this.props.gioHangBanDau.reduce((tong, itemHientai) => {
      return tong + itemHientai.soLuong;
    }, 0);
  };

  renderTongTien = () => {
    return this.props.gioHangBanDau.reduce((tong, itemHientai) => {
      return tong + itemHientai.giaBan * itemHientai.soLuong;
    }, 0);
  };
  render() {
    return (
      <div className="text-end mt-4 mb-4">
        {/* Modal trigger button */}
        <button
          type="button"
          className="btn btn-primary btn-md"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          <span style={{ color: "white" }}>
            Add to cart ({this.renderTongSoLuong()})
          </span>
          <i style={{ color: "white" }} class="fa fa-shopping-cart"></i>
        </button>

        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
            style={{ minWidth: "60%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table table-primary">
                    <thead>
                      <tr>
                        <th scope="col">Mã</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.gioHangBanDau.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.maSP}</td>
                            <td>
                              <img
                                src={item.hinhAnh}
                                alt=""
                                style={{ width: "100px" }}
                              />
                            </td>
                            <td>{item.tenSP}</td>
                            <td>
                              <button
                                className="btn btn-success"
                                onClick={() => {
                                  this.props.handleSoLuong(item.maSP, -1);
                                }}
                              >
                                -
                              </button>
                              {item.soLuong}
                              <button
                                className="btn btn-success"
                                onClick={() => {
                                  this.props.handleSoLuong(item.maSP, 1);
                                }}
                              >
                                +
                              </button>
                            </td>
                            <td>{item.giaBan.toLocaleString()}</td>
                            <td>
                              {(item.giaBan * item.soLuong).toLocaleString()}
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  this.props.handleXoaItem(item.maSP);
                                }}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <td>Tổng tiền</td>
                        <td>{this.renderTongTien().toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSoLuong: (id, cal) => {
      dispatch({
        type: "XU_LY_SO_LUONG",
        id,
        cal,
      });
    },
    handleXoaItem: (id) => {
      dispatch({
        type: "XOA_ITEM",
        id,
      });
    },
  };
};

const mapStateToProps = (state) => {
  //state đại diện cho toàn bộ trạng thái của Redux(rootreducer)
  return {
    gioHangBanDau: state.gioHang.gioHangBanDau,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EXCPhoneModal);
