import { CHANGE_SEARCH_VALUE } from "../services/consts";

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
});
