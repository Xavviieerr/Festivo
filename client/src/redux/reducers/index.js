import { combineReducers } from "redux";
import authReducer from "./authReducer";
import friendSlice from "../slice/friendSlice";
import eventSlice from "../slice/eventSlice";

export const reducers = combineReducers({
  authReducer,
  friendSlice,
  eventSlice,
});
