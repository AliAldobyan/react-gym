import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
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
