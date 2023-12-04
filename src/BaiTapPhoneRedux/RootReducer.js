import { combineReducers } from "redux";
import ReducerGioHang from "./ReducerGioHang";

const rootReducer = combineReducers({
    gioHang : ReducerGioHang
})


export default rootReducer