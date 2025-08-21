const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, loading: false, error: false, authData: action.data };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "AUTH_UPDATE_DETAILS":
      const existingProfile = JSON.parse(localStorage.getItem("store")) || {};
      const updatedProfile = {
        ...existingProfile,
        authData: {
          ...existingProfile.authData,
          user: action.data?.user,
        },
      };
      localStorage.setItem("store", JSON.stringify(updatedProfile));
      return { ...state, authData: updatedProfile };
    case "AUTH_UPDATE_DETAILS_FAILED":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default authReducer;
