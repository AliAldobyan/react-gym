import { createStore, combineReducers } from "redux";

import { fetchGyms } from "./actions";
import gymReducer from "./reducers/gyms.js";

const rootReducer = combineReducers({
  gymsState: gymReducer,
});

const store = createStore(rootReducer);
store.dispatch(fetchGyms());

export default store;
