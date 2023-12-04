import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinVanGame extends Component {
  renderKetQua = () => {
    switch (this.props.thangThua) {
      case "thang": {
        return <span style={{ color: "green" }}>WoW! Bạn thắng rồi</span>;
      }
      case "thua": {
        return <span style={{ color: "red" }}>Tiếc quá, thua òy</span>;
      }
      case "h": {
        return <span style={{ color: "blue" }}>Hòa goỳ, tiếp thoy</span>;
      }

      default:
        return <span style={{ color: "green" }}>Welcome To 12C</span>;
    }
  };

  render() {
    return (
      <div className="col-4">
        <div style={{ fontSize: "45px", color: "green" }}>
          {this.renderKetQua()}
        </div>
        <div style={{ fontSize: "45px", color: "yellow" }}>
          Số bàn thắng:{" "}
          <span style={{ color: "green" }}>{this.props.soBanThang}</span>
        </div>
        <div style={{ fontSize: "45px", color: "yellow" }}>
          Số bàn thua:{" "}
          <span style={{ color: "red" }}>{this.props.soBanThua}</span>
        </div>
        <div style={{ fontSize: "45px", color: "yellow" }}>
          Tỉ lệ thắng:{this.props.tiLeThang}%
        </div>
        <div style={{ fontSize: "45px", color: "yellow" }}>
          Tổng game chơi:{" "}
          <span style={{ color: "white" }}>{this.props.tongSoBanChoi}</span>{" "}
        </div>

        <div className="mt-5">
          <button
            className="btn btn-success"
            style={{ fontSize: "45px" }}
            onClick={() => {
              this.props.handleRandom();
            }}
          >
            Play Game!!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangKeoBuaBao: state.ThongTin.mangKeoBuaBao,
    thangThua: state.ThongTin.ketqua,
    soBanThang: state.ThongTin.soBanThang,
    soBanThua: state.ThongTin.soBanThua,
    tongSoBanChoi: state.ThongTin.tongSoBanChoi,
    tiLeThang: state.ThongTin.tiLeThang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRandom: () => {
      let count = 0;
      let randomNumberItem = setInterval(() => {
        dispatch({
          type: "HANDLE_RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomNumberItem);
          dispatch({
            type: "HANDLE_WIN_GAME",
          });
        }
      }, 50);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinVanGame);
