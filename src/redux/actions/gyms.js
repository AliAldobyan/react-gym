import { SET_GYMS, ADD_GYM } from "./actionType";
import instance from "./instance";

export const fetchGyms = () => async (dispatch) => {
  try {
    const res = await instance.get("api/gym/");
    const gyms = res.data;
    dispatch({
      type: SET_GYMS,
      payload: gyms,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addGym = (gym) => async (dispatch) => {
  try {
    const res = await instance.post("api/gymcreate/", gym);
    const newGym = res.data;
    dispatch({
      type: ADD_GYM,
      payload: newGym,
    });
  } catch (err) {
    console.error(err);
  }
};
