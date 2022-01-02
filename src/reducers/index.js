import { wishListReducer } from "./wishListReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
  wishListState: wishListReducer,
});
