import React, { Component } from "react";
import CarList from "./CarList";
import ModalCar from "./ModalCar";

export default class CarStore extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
  ];

  state = {
    carClicked: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };


  handleChangeModal = (item) => {
    this.setState({
        carClicked : item
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Danh sách xe</h1>

        <CarList propshandleChangeModal = {this.handleChangeModal} propsCarList={this.products} />

        <ModalCar  propsModalCar = {this.state.carClicked} />
      </div>
    );
  }
}
