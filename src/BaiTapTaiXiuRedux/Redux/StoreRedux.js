import { legacy_createStore as createStore } from "redux";
import rootReducerTaiXiu from "./RootReducer";

const store = createStore(rootReducerTaiXiu);

export default store;
