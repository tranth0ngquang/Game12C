import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinVanGame extends Component {
  renderLuaChon = () => {
    if (this.props.stateLuaChon === "") {
      return <span></span>;
    } else {
      if (this.props.stateLuaChon === true) {
        return <span style={{ color: "green" }}>Tài</span>;
      } else {
        return <span style={{ color: "red" }}>Xỉu</span>;
      }
    }
  };

  renderTongSoBanChoi = () => {
    return <span style={{ color: "blue" }}>{this.props.stateTongBanChoi}</span>;
  };

  renderSoBanThang = () => {
    return <span style={{ color: "green" }}>{this.props.stateSoBanThang}</span>;
  };

  renderTongDiem = () => {
    return <span style={{ color: "green" }}>{this.props.stateTongDiem}</span>;
  };

  renderThangThua = () => {
    if (this.props.stateTongBanChoi === 0) {
      return;
    } else {
      if (this.props.stateThangThua) {
        return <span style={{ color: "green" }}>Bạn vừa thắng</span>;
      } else {
        return <span style={{ color: "red" }}>Bạn vừa thua</span>;
      }
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-6" style={{ fontSize: "50px" }}>
          BẠN CHỌN: {this.renderLuaChon()}
        </div>
        <div className="col-6" style={{ fontSize: "50px" }}>
          KẾT QUẢ VỪA RA: {this.renderTongDiem()}
        </div>
        <div className="col-6" style={{ fontSize: "50px" }}>
          KẾT QUẢ THẮNG THUA : {this.renderThangThua()}
        </div>
        <div className="col-6" style={{ fontSize: "50px" }}>
          SỐ BÀN THẮNG : {this.renderSoBanThang()}
        </div>{" "}
        <div className="col-12" style={{ fontSize: "50px" }}>
          TỔNG SỐ BÀN ĐÃ CHƠI: {this.renderTongSoBanChoi()}
        </div>
        <div className="col-12">
          <button
            style={{ fontSize: "50px" }}
            className="btn btn-success"
            onClick={() => {
              this.props.handlePlayGame();
            }}
          >
            CHƠI NGAY!!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateLuaChon: state.ThongTin.luaChon,
    stateTongBanChoi: state.ThongTin.tongSoBanChoi,
    stateSoBanThang: state.ThongTin.soBanThang,
    stateTongDiem: state.ThongTin.tongDiem,
    stateThangThua: state.ThongTin.ThangThua,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({
        type: "HANDLE_PLAY_GAME",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinVanGame);
