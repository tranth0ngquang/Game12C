import { legacy_createStore as createStore} from 'redux'
import rootReducer from './RootReducer';

const store = createStore(rootReducer);

export default store;