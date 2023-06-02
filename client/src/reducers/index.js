import { combineReducers } from 'redux';
import auth from "./auth.js";
import addMovie from "./addMovie.js";
import lists from "./lists.js";

export default combineReducers({
  auth,
  addMovie,
  lists,
});