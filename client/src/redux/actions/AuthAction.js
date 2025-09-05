import * as AuthApi from "../../api/AuthRequest";
import { toast } from "react-toastify";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    toast.success("Login Successful! 😊");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    toast.error(error.response.data);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    toast.success("SignUp Successful! 😊");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const updateDetails = (formData, token) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.updateDetails(formData, token);
    dispatch({ type: "AUTH_UPDATE_DETAILS", data: data });
    console.log(data);
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_UPDATE_DETAILS_FAILED" });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({ type: "AUTH_LOG_OUT" });
};
