import { SET_BOOKINGS, BOOKING, CANCEL } from "./actionType";
import instance from "./instance";

export const fetchBookings = () => async (dispatch) => {
  try {
    const res = await instance.get("api/mybooking/");
    const bookings = res.data;
    dispatch({
      type: SET_BOOKINGS,
      payload: bookings,
    });
  } catch (err) {
    console.error(err);
  }
};

export const bookingClass = (ClassId) => async (dispatch) => {
  try {
    const res = await instance.post("api/book/", ClassId);
    const AddBooking = res.data;
    dispatch({
      type: BOOKING,
      payload: AddBooking,
    });
  } catch (err) {
    console.error(err);
  }
};

export const cancel = (BookingID) => async (dispatch) => {
  try {
    const res = await instance.delete(
      "api/cancel/<int:booking_id>/",
      BookingID
    ); //not sure how to pass the id
    const cancelBooking = res.data;
    dispatch({
      type: CANCEL,
    });
  } catch (err) {
    console.error(err);
  }
};
