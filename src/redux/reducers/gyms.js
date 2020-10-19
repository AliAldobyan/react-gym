import { SET_GYMS } from "../actions/actionType";
//import gyms from "../../data.js";

const initialState = {
  gyms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GYMS:
      return {
        ...state,
        gyms: action.payload,
      };
    default:
      return state;
  }
};
