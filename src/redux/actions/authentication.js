import decode from "jwt-decode";
import instance from "./instance";
import { SET_CURRENT_USER } from "./actionTypes";
import Cookies from "js-cookie";

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/api-login/", userData);
      const { token } = response.data;
      dispatch(setCurrentUser(token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("api/signup/", userData);
      const { token } = response.data;
      dispatch(setCurrentUser(token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => setCurrentUser();

const setAuthToken = (token) => {
  if (token) {
    Cookies.set("token", token);
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    Cookies.remove("token");
  }
};

const setCurrentUser = (token) => {
  setAuthToken(token);
  const user = token ? decode(token) : null;
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
export const checkForExpiredToken = () => {
  const token = Cookies.get("token");
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    const user = decode(token);
    if (user.exp >= currentTimeInSeconds) {
      return setCurrentUser(token);
    }
  }
  return setCurrentUser();
};
