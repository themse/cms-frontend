import { SET_CATEGORY_LIST } from './const';

const initialState = {
    list: [],
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST: {
            return { ...state, list: action.payload };
        }

        default: {
            return state;
        }
    }
};
