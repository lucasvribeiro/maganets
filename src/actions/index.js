import {
  ADD_TO_WISH_LIST,
  REMOVE_FROM_WISH_LIST,
  CHANGE_SEARCH_VALUE,
} from "../services/consts";

export const addToWishList = (product) => ({
  type: ADD_TO_WISH_LIST,
  product,
});

export const removeFromWishList = (product) => ({
  type: REMOVE_FROM_WISH_LIST,
  product,
});

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
});
