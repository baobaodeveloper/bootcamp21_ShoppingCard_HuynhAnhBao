import { combineReducers } from "redux";
import phoneReducer from "./phoneReducer";

const rootReducer = combineReducers({
  phone: phoneReducer,
});

export default rootReducer;
