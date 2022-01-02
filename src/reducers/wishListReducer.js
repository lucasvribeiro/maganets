import { getWishList, setWishList } from "../services/persistence";
import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST } from "../services/consts";

const initialState = {
  wishList: getWishList(),
};
export const wishListReducer = (state = initialState, action) => {
  var newWishList = [];

  switch (action.type) {
    case ADD_TO_WISH_LIST:
      newWishList = state.wishList.concat(action.product);
      setWishList(newWishList);

      return {
        wishList: newWishList,
      };

    case REMOVE_FROM_WISH_LIST:
      newWishList = state.wishList.filter((p) => p.id !== action.product.id);
      setWishList(newWishList);

      return {
        wishList: newWishList,
      };

    default:
      return state;
  }
};
