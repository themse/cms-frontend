import * as Api from "../../service/api";
import { setVendorList } from "./actions";

export const setVendorListRequest = () => async (dispatch) => {
  try {
    const vendors = await Api.vendor.getVendorList();
    dispatch(setVendorList(vendors));
  } catch (error) {
    console.error(error);
  }
};
