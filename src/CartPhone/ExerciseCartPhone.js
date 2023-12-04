import React, { Component } from "react";
import PhoneList from "./PhoneList";
import Cart from "./Cart";
import dataListPhone from "../Data/dataPhone.json";

export default class ExerciseCartPhone extends Component {
  state = {
    gioHangFull: [],
  };

  handleAddToCart = (item) => {
    let index = this.state.gioHangFull.findIndex((itemInGioHang) => {
      return itemInGioHang.maSP === item.maSP;
    });

    let cloneGioHangFull = [...this.state.gioHangFull];
    if (index !== -1) {
      cloneGioHangFull[index].soLuong += 1;
      this.setState({
        gioHangFull: cloneGioHangFull,
      });
    } else {
      this.setState({
        gioHangFull: [...this.state.gioHangFull, item],
      });
    }
  };

  handleSoLuong = (id, cal) => {
    let cloneGioHangFull = [...this.state.gioHangFull];
    let index = this.state.gioHangFull.findIndex((itemInGioHang) => {
      return itemInGioHang.maSP === id;
    });

    if (index !== -1) {
      if (cloneGioHangFull[index].soLuong === 1 && cal === -1) {
        return alert("san pham it nhat la 1");
      }
      cloneGioHangFull[index].soLuong += cal;
      this.setState({
        gioHangFull: cloneGioHangFull,
      });
    }
  };

  handleDeleteItem = (id) => {
    let cloneGioHangFull = [...this.state.gioHangFull];
    let index = this.state.gioHangFull.findIndex((itemInGioHang) => {
      return itemInGioHang.maSP === id;
    });

    if (index !== -1) {
      cloneGioHangFull[index].soLuong = 0;
      cloneGioHangFull.splice(index, 1);
    }
    this.setState({
      gioHangFull: cloneGioHangFull,
    });
  };

  renderTongSoLuong = () => {
    let cloneGioHangFull = [...this.state.gioHangFull];
    const sum = cloneGioHangFull.reduce((tong, itemHienTai) => {
      return tong + itemHienTai.soLuong;
    }, 0);
    return sum;
  };

  renderTongTien = () => {
    let cloneGioHangFull = [...this.state.gioHangFull];
    const sum = cloneGioHangFull.reduce((tong, itemHienTai) => {
      return tong + itemHienTai.soLuong * itemHienTai.giaBan;
    }, 0);
    return sum;
  };

  render() {
    return (
      <div className="container">
        <h1 className="mb-5">Phone Shop</h1>
        <Cart
          propsDataCartItem={this.state.gioHangFull}
          propshandleSoLuong={this.handleSoLuong}
          propshandleDeleteItem={this.handleDeleteItem}
          propsrenderTongSoLuong={this.renderTongSoLuong}
          propsrenderTongTien={this.renderTongTien}
        />

        <PhoneList
          propsdataListPhone={dataListPhone}
          propshandleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
