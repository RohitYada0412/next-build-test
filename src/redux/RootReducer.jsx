import { combineReducers } from "@reduxjs/toolkit";

import authSlice from './slice/auth/session.slice'

const combinedReducer = combineReducers({
  auth: authSlice,
});
export const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};
