import React, { Component } from "react";
import "./Css/index.css";
import Player from "./Player";
import Computer from "./Computer";
import ThongTinVanGame from "./ThongTinVanGame";
export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="container-fluid backgroundOanTuXi">
        <div className="row">
          <Player />
          <ThongTinVanGame />
          <Computer />
        </div>
      </div>
    );
  }
}
