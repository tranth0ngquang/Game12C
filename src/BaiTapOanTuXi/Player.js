import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderItem = () => {
    return this.props.mangKeoBuaBao.map((item, index) => {
      let border = {};
      if (item.luaChon === true) {
        border = { border: "5px solid green" };
      }
      return (
        <div className="col-4" key={index}>
          <button
            style={border}
            onClick={() => {
              this.props.itemDuocChon(item.id);
            }}
          >
            <img alt="" src={item.hinhAnh} width={"100px"} />
          </button>
        </div>
      );
    });
  };

  renderBubleItem = () => {
    return this.props.mangKeoBuaBao.map((item, index) => {
      if (item.luaChon === true) {
        return <img alt="" src={item.hinhAnh} width={"100px"} />;
      } else return null;
    });
  };
  render() {
    return (
      <div className="col-4 mt-2">
        <div className="speech-bubble">{this.renderBubleItem()}</div>
        <div className="playerIron">
          <img alt="" src="./img/gameOanTuXi/player.png" width={"200px"} />
        </div>
        <div className="row">{this.renderItem()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangKeoBuaBao: state.ThongTin.mangKeoBuaBao,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itemDuocChon: (id) => {
      dispatch({
        type: "LUA_CHON",
        id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
