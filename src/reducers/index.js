import { combineReducers } from "redux";

import { wishListReducer } from "./wishListReducer";
import { searchValueReducer } from "./searchValueReducer";
import { productsReducer } from "./productsReducer";

export const Reducers = combineReducers({
  wishListState: wishListReducer,
  searchValueState: searchValueReducer,
  productsState: productsReducer,
});
