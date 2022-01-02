const initialState = {
  wishList: [],
};
export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISH_LIST":
      return {
        wishList: state.wishList.concat(action.product),
      };

    case "REMOVE_FROM_WISH_LIST":
      return {
        wishList: state.wishList.filter((p) => p.id !== action.product.id),
      };

    default:
      return state;
  }
};
