import { combineReducers } from "redux";
import ThongTinVanGameReducer from "./ThongTinGameReducer";


const rootReducerTaiXiu = combineReducers({
    ThongTin : ThongTinVanGameReducer
})

export default rootReducerTaiXiu