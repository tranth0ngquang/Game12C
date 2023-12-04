const stateBanDau = {
  mangXucXac: [
    { id: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { id: 2, hinhAnh: "./img/gameXucXac/2.png" },
    { id: 3, hinhAnh: "./img/gameXucXac/3.png" },
  ],
  luaChon: '',
  soBanThang: 0,
  tongSoBanChoi: 0,
  // tongDiem: 0,
  // ThangThua: true,
};

const ThongTinVanGameReducer = (state = stateBanDau, action) => {
  switch (action.type) {
    case "HANDLE_LUA_CHON": {
      if (action.luaChon === true) {
        state.luaChon = true;
      } else {
        state.luaChon = false;
      }
      return { ...state };
    }

    case "HANDLE_PLAY_GAME": {
      let mangXucXacRong = [];
      let clonemangXucXac = [...state.mangXucXac];
      for (let i = 0; i < 3; i++) {
        let idOfXucXac = Math.floor(Math.random() * 6) + 1; // Tạo số ngẫu nhiên từ 1 đế
        mangXucXacRong[i] = {
          id: idOfXucXac,
          hinhAnh: `./img/gameXucXac/${idOfXucXac}.png`,
        };
      }

      clonemangXucXac = mangXucXacRong;
      state.mangXucXac = clonemangXucXac;

      state.tongDiem = state.mangXucXac.reduce((tong, itemHienTai) => {
        return tong + itemHienTai.id;
      }, 0);

      if (
        (state.luaChon === true && state.tongDiem >= 12) ||
        (state.luaChon === false && state.tongDiem <= 11)
      ) {
        state.soBanThang += 1;
        state.ThangThua = true;
      } else {
        state.ThangThua = false;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default ThongTinVanGameReducer;
