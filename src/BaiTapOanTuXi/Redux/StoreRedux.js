import { legacy_createStore as createStore } from "redux";
import rootReducerOanTuXi from './RootReducer'

const store = createStore(rootReducerOanTuXi);

export default store