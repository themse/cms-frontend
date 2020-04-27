import * as Api from "../../service/api";
import { setCategoryList } from "./actions";

export const setCategoryListRequest = () => async (dispatch) => {
  try {
    const categories = await Api.category.getCategoryList();
    dispatch(setCategoryList(categories));
  } catch (error) {
    console.error(error);
  }
};
