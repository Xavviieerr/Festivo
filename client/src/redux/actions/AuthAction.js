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
    dispatch({ type: "AUTH_FAIL" });
    toast.error(error.response.data);
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
    dispatch({ type: "AUTH_FAIL" });
    toast.error(error.response.data.message);
  }
};
