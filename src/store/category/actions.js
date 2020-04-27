import { SET_CATEGORY_LIST } from "./const";

export const setCategoryList = (categories) => {
  return {
    type: SET_CATEGORY_LIST,
    payload: categories,
  };
};
