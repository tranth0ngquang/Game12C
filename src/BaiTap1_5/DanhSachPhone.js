import React, { Component } from "react";
import DataPhone from "../Data/dataPhone.json";
import ItemPhone from "./ItemPhone";
export default class DanhSachPhone extends Component {
  renderItem = () => {
    return DataPhone.map((item, index) => {
      return (
        <div className="col-4 text-center" key={index}>
          <ItemPhone propsFhandleChangeInfo ={this.handleChangeInfo} propsDataPhoneItem={item} />
        </div>
      );
    });
  };

  state = {
    phoneClicked: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  handleChangeInfo = (item) =>{
    this.setState({
        phoneClicked : item
    })
  }

  render() {
    return (
      <div className="container">
        <h1>DANH SÁCH SẢN PHẨM</h1>
        <div className="row">{this.renderItem()}</div>
        <div className="row  mt-5">
          <div className="col-4">
            <h3>{this.state.phoneClicked.tenSP}</h3>
            <img
              alt=""
              className="img-fluid"
              src={this.state.phoneClicked.hinhAnh}
            />
          </div>
          <div className="col-8">
            <h3>THÔNG SỐ KỸ THUẬT</h3>

            <div className="table-responsive">
              <table className="table table-bordered border-primary">
                <tbody>
                  <tr>
                    <th className="table-info">MÀN HÌNH</th>
                    <td>{this.state.phoneClicked.manHinh}</td>
                  </tr>
                  <tr>
                    <th className="table-info">HỆ ĐIỀU HÀNH</th>
                    <td>{this.state.phoneClicked.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th className="table-info">CAM TRƯỚC</th>
                    <td>{this.state.phoneClicked.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th className="table-info">CAM SAU</th>
                    <td>{this.state.phoneClicked.cameraSau}</td>
                  </tr>{" "}
                  <tr>
                    <th className="table-info">RAM</th>
                    <td>{this.state.phoneClicked.ram}</td>
                  </tr>
                  <tr>
                    <th className="table-info">ROM</th>
                    <td>{this.state.phoneClicked.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
