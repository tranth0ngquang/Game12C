import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div className="col-4 mt-2">
        <div className="speech-bubble">
          <img alt="" src={this.props.computer.hinhAnh} width={"100px"} />
        </div>
        <div className="playerIron">
          <img
            alt=""
            src="./img/gameOanTuXi/playerComputer.png"
            width={"200px"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    computer : state.ThongTin.computer
  }
}

export default connect(mapStateToProps)(Computer);
