import React, { Component } from "react";

export default class Cart extends Component {
  renderCartItem = () => {
    return this.props.propsDataCartItem.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img style={{ width: "100px" }} src={item.hinhAnh} alt="" />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.propshandleSoLuong(item.maSP, -1);
              }}
            >
              -
            </button>
            {item.soLuong}

            <button
              className="btn btn-success"
              onClick={() => {
                this.props.propshandleSoLuong(item.maSP, 1);
              }}
            >
              +
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.propshandleDeleteItem(item.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="text-end mb-4">
        <button
          style={{ backgroundColor: "#FF6600" }}
          type="button"
          className="btn   btn-md"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          <span style={{ color: "white" }}>
            Add to cart ({this.props.propsrenderTongSoLuong()}){" "}
          </span>
          <i style={{ color: "white" }} class="fa fa-shopping-cart"></i>
        </button>
        {/* Modal Body */}
        {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{this.renderCartItem()}</tbody>
                    <tfoot>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tổng tiền</td>
                        <td>{this.props.propsrenderTongTien().toLocaleString()}</td>
                      </tr>
                    </tfoot>
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
