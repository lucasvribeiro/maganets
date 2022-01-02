import { combineReducers } from "redux";

import { wishListReducer } from "./wishListReducer";
import { searchValueReducer } from "./searchValueReducer";

export const Reducers = combineReducers({
  wishListState: wishListReducer,
  searchValueState: searchValueReducer,
});
