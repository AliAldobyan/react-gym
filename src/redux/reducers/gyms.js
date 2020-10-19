import { SET_GYMS, ADD_GYM } from "../actions/actionType";
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
    case ADD_GYM:
      const newGym = action.payload;
      return [newGym, ...state];
    default:
      return state;
  }
};
