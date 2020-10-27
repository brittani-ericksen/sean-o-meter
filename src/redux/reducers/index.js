import { combineReducers } from "redux";
import levelReducer from "./level";

export default combineReducers({ level: levelReducer });