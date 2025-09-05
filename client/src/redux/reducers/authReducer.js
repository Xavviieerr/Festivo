import { toast } from "react-toastify";
const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      return { ...state, loading: false, error: false, authData: action.data };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "AUTH_UPDATE_DETAILS":
      const existingProfile = JSON.parse(localStorage.getItem("store")) || {};
      const updatedProfile = {
        ...existingProfile,
        authReducer: {
          ...existingProfile.authReducer,
          authData: {
            ...existingProfile.authReducer.authData,
            user: action?.data.user,
          },
        },
      };
      localStorage.setItem("store", JSON.stringify(updatedProfile));
      toast.success("Upload Successful 🎉");
      return {
        ...state,
        authData: {
          ...state.authData,
          user: action?.data.user,
        },
      };
    case "AUTH_UPDATE_DETAILS_FAILED":
      toast.error("Update failed. 😢");
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default authReducer;
