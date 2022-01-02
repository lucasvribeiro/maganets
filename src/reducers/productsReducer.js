import {
  FILTER_PRODUCTS,
  INITIALIZE_PRODUCTS,
  REFRESH_PRODUCTS,
} from "../services/consts";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PRODUCTS:
      return {
        products: action.products,
        filteredProducts: action.products,
      };

    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter((p) =>
          p.title.toLowerCase().includes(action.value.toLowerCase())
        ),
      };

    case REFRESH_PRODUCTS:
      return {
        products: action.products,
        filteredProducts: action.products.filter((p) =>
          p.title.toLowerCase().includes(action.searchValue.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
