import { combineReducers } from "redux";
import ThongTinVanGameReducer from "./ThongTinVanGameReducer";

const rootReducerOanTuXi = combineReducers({
  ThongTin: ThongTinVanGameReducer,
});

export default rootReducerOanTuXi;
