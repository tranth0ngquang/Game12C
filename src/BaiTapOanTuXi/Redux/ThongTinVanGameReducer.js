const stateBanDau = {
  mangKeoBuaBao: [
    {
      id: "keo",
      hinhAnh: "./img/gameOanTuXi/keo.png",
      luaChon: true,
    },
    {
      id: "bua",
      hinhAnh: "./img/gameOanTuXi/bua.png",
      luaChon: false,
    },
    {
      id: "bao",
      hinhAnh: "./img/gameOanTuXi/bao.png",
      luaChon: false,
    },
  ],

  ketqua: "Welcome To OanTuC",
  computer: {
    id: "keo",
    hinhAnh: "./img/gameOanTuXi/keo.png",
    luaChon: false,
  },
  soBanThang: 0,
  soBanThua: 0,
  tongSoBanChoi: 0,
  tiLeThang: 0,
};

const ThongTinVanGameOanTuXi = (state = stateBanDau, action) => {
  switch (action.type) {
    case "LUA_CHON": {
      let clonemangKeoBuaBao = [...state.mangKeoBuaBao];
      clonemangKeoBuaBao.map((item, index) => {
        if (action.id === item.id) {
          return (item.luaChon = true);
        }
        return (item.luaChon = false);
      });
      state.mangKeoBuaBao = [...clonemangKeoBuaBao];
      return { ...state };
    }

    case "HANDLE_RANDOM": {
      let clonecomputer = state.computer;
      const randomNumber = Math.floor(Math.random() * 3);
      clonecomputer = state.mangKeoBuaBao[randomNumber];
      state.computer = clonecomputer;

      return { ...state };
    }

    case "HANDLE_WIN_GAME": {
      state.tongSoBanChoi += 1;
      let clickedItem = state.mangKeoBuaBao.find(
        (item) => item.luaChon === true
      );

      let clonecomputer = state.computer;
      switch (clickedItem.id) {
        case "keo":
          if (clonecomputer.id === "keo") {
            state.ketqua = "h";
          } else if (clonecomputer.id === "bua") {
            state.ketqua = "thua";
            state.soBanThua += 1;
          } else if (clonecomputer.id === "bao") {
            state.ketqua = "thang";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (clonecomputer.id === "keo") {
            state.soBanThang += 1;
            state.ketqua = "thang";
          } else if (clonecomputer.id === "bua") {
            state.ketqua = "h";
          } else if (clonecomputer.id === "bao") {
            state.ketqua = "thua";
            state.soBanThua += 1;
          }
          break;
        case "bao":
          if (clonecomputer.id === "keo") {
            state.ketqua = "thua";
            state.soBanThua += 1;
          } else if (clonecomputer.id === "bua") {
            state.ketqua = "thang";
            state.soBanThang += 1;
          } else if (clonecomputer.id === "bao") {
            state.ketqua = "h";
          }
          break;

        default:
          state.ketqua = { ...state.ketqua };
      }

      state.tiLeThang = Math.ceil(
        (state.soBanThang / state.tongSoBanChoi) * 100
      );
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ThongTinVanGameOanTuXi;
