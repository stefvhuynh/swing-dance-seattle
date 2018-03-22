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

export const events = (state = initialState.events) => {
  return state;
};

export const users = (state = initialState.users) => {
  return state;
};

export const ui = (state = initialState.ui) => {
  return state;
};
