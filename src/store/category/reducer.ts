import { Reducer } from 'redux';
import { CategoryType, CategoryState, CategoryActionTypes } from './types';

const initialState: CategoryState = {
    list: [],
};

export const categoryReducer: Reducer<CategoryState, CategoryActionTypes> = (
    state = initialState,
    action
): CategoryState => {
    switch (action.type) {
        case CategoryType.SET_LIST: {
            return { ...state, list: action.payload };
        }

        default: {
            return state;
        }
    }
};
