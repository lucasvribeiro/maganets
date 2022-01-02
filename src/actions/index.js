import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST } from "../services/consts";

export const addToWishList = (product) => ({
  type: ADD_TO_WISH_LIST,
  product,
});

export const removeFromWishList = (product) => ({
  type: REMOVE_FROM_WISH_LIST,
  product,
});
