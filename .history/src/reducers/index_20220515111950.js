import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import phoneReducer from "./phoneReducer";

const rootReducer = combineReducers({
  phoneReducer,
  detailReducer,
});

export default rootReducer;
