const stateGioHang = {
  gioHangBanDau: [],
};

const ReducerGioHang = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHangBanDau.findIndex((itemInGioHang) => {
        return itemInGioHang.maSP === action.item.maSP;
      });

      if (index !== -1) {
        state.gioHangBanDau[index].soLuong += 1;
      } else {
        state.gioHangBanDau.push(action.item);
      }

      state.gioHangBanDau = [...state.gioHangBanDau];

      return { ...state };
    }

    case "XU_LY_SO_LUONG": {
      let cloneGioHangBanDau = [...state.gioHangBanDau];
      let index = cloneGioHangBanDau.findIndex((itemInGioHang) => {
        return itemInGioHang.maSP === action.id;
      });
      if (index !== -1) {
        if (cloneGioHangBanDau[index].soLuong === 1 && action.cal === -1) {
          alert("Sản phẩm đã có số lượng nhỏ nhất là 1. Không thể giảm thêm.");
          // Không thực hiện bất kỳ thay đổi nào trong trường hợp này
        } else {
          cloneGioHangBanDau[index].soLuong += action.cal;
        }
      }
      state.gioHangBanDau = cloneGioHangBanDau;

      return { ...state };
    }

    case "XOA_ITEM": {
      let cloneGioHangBanDau = [...state.gioHangBanDau];
      let index = cloneGioHangBanDau.findIndex((itemInGioHang) => {
        return itemInGioHang.maSP === action.id;
      });
      if (index !== -1) {
        cloneGioHangBanDau[index].soLuong = 0;

        cloneGioHangBanDau.splice(index, 1);
      }
      state.gioHangBanDau = cloneGioHangBanDau;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ReducerGioHang;
