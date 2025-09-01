import { combineReducers } from "redux";
import authReducer from "./authReducer";
import friendSlice from "../slice/friendSlice";

export const reducers = combineReducers({ authReducer, friendSlice });
