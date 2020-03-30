import { combineReducers } from "redux";

import catalogs from "./catalogs";

const appReducer = combineReducers({
  catalogs
});

export default (state, action) => {
  if (action.type === "user/SIGN_OUT") {
    state = { application: state.application };
  }

  return appReducer(state, action);
};
