import {
  ADD_TO_WISH_LIST,
  REMOVE_FROM_WISH_LIST,
  CHANGE_SEARCH_VALUE,
  FILTER_PRODUCTS,
  INITIALIZE_PRODUCTS,
  REFRESH_PRODUCTS,
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

export const initializeProducts = (products) => ({
  type: INITIALIZE_PRODUCTS,
  products,
});

export const filterProducts = (value) => ({
  type: FILTER_PRODUCTS,
  value,
});

export const refreshProducts = (products, searchValue) => ({
  type: REFRESH_PRODUCTS,
  products,
  searchValue,
});
