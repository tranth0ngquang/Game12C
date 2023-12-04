import React, { Component } from "react";
import "./Css/index.css";
import ThongTinVanGame from "./ThongTinVanGame";
import { connect } from "react-redux";

class BaiTapTaiXiu extends Component {
  state = {
    activeButton: null,
  };

  handleButtonClicked = (buttonId) => {
    this.setState({
      activeButton: buttonId,
    });
  };

  renderMangXucXac = () => {
    return this.props.ThongTin.mangXucXac.map((item, index) => {
      return (
        <img
          alt=""
          src={item.hinhAnh}
          key={index}
          style={{ width: "100px", margin: "20px" }}
        />
      );
    });
  };

  render() {
    const { activeButton } = this.state;
    return (
      <div className="container backgroundXucXac">
        <p style={{ fontSize: "80px" }}>Game Tài Xỉu</p>
        <div className="row">
          <div className="col-4">
            <button
              className={`${activeButton === 1 ? "active" : ""} button__adjust`}
              onClick={() => {
                this.handleButtonClicked(1);
                this.props.handleLuaChon(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-4">{this.renderMangXucXac()}</div>
          <div className="col-4">
            <button
              className={`${activeButton === 2 ? "active" : ""} button__adjust`}
              onClick={() => {
                this.handleButtonClicked(2);
                this.props.handleLuaChon(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
        <ThongTinVanGame />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ThongTin: state.ThongTin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLuaChon: (luaChon) => {
      dispatch({
        type : 'HANDLE_LUA_CHON',
        luaChon
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapTaiXiu);
