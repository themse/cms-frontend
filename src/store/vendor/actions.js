import { SET_VENDOR_LIST } from "./const";

export const setVendorList = (vendors) => {
  return {
    type: SET_VENDOR_LIST,
    payload: vendors,
  };
};
