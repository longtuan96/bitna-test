import { combineReducers } from "redux";

import leadReducer from "./lead.reducer";
export default combineReducers({
  lead: leadReducer,
});
