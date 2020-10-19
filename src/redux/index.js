import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { fetchGyms } from "./actions";
import gymReducer from "./reducers/gyms.js";

const rootReducer = combineReducers({
  gymsState: gymReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchGyms());

export default store;
