import { CHANGE_SEARCH_VALUE } from "../services/consts";

const initialState = {
  searchValue: "",
};
export const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        searchValue: action.value,
      };

    default:
      return state;
  }
};
