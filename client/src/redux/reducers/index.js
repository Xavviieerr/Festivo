import { combineReducers } from "redux";
import authReducer from "./authReducer";
import friendSlice from "../slice/friendSlice";
import eventSlice from "../slice/eventSlice";

//combines all reducers
const appReducers = combineReducers({
  authReducer,
  friendSlice,
  eventSlice,
});

//then watever action is diapatched rooeReducer is
//checked first before delegating the state and data to other reducers
export const rootReducer = (state, action) => {
  if (action.type === "AUTH_LOG_OUT") {
    state = undefined;
  }
  return appReducers(state, action);
};
