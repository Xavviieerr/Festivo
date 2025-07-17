import * as AuthApi from "../../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    //i think ill add the pop up notification here for error or success data.message
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    //i think ill add the pop up notification here for error or success error.message
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    //i think ill add the pop up notification here for error or success data.message
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    //i think ill add the pop up notification here for error or success error.message
  }
};
