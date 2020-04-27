import { SET_VENDOR_LIST } from "./const";

const initialState = {
  list: [],
};

export const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VENDOR_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
