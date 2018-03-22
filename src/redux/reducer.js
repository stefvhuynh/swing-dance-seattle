import { combineReducers } from "redux";

const initialState = {
  events: {
    data: [],
    fetching: false
  },
  users: {
    data: [],
    fetching: false
  },
  ui: {
    filter: "",
    page: 1
  }
};

const events = (state = initialState.events) => {
  return state;
};

const users = (state = initialState.users) => {
  return state;
};

const ui = (state = initialState.ui) => {
  return state;
};

export default combineReducers({
  events,
  users,
  ui
});
