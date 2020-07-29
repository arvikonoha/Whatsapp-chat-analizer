import { DELETE_FILE } from "./messageActionTypes";

export function messageReducer(state, action) {
  switch (action.type) {
    case DELETE_FILE:
      return { ...state, file: null, results: [], messages: [], members: [] };
    default:
      return { ...state, ...action.payload };
  }
}
