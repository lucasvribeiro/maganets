import {
  FILTER_PRODUCTS,
  INITIALIZE_PRODUCTS,
  REFRESH_PRODUCTS,
} from "../services/consts";

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
