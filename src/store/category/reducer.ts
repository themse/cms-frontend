import { Reducer } from 'redux';
import { normalize } from 'normalizr';
import { ReducerStrategyType, HandlerType } from '../types';
import { CategoryType, CategoryState, CategoryActionTypes } from './types';
import { categorySchema } from './schema';

const initialState: CategoryState = {
    list: [],
};

const reducerStrategy: ReducerStrategyType<CategoryState, CategoryActionTypes, CategoryType> = {
    [CategoryType.LIST_REQUEST]: defaultHandler,
    [CategoryType.LIST_SUCCESS]: ListSuccessHandler,
    [CategoryType.LIST_FAILED]: defaultHandler,
    __default__: defaultHandler,
};

export const categoryReducer: Reducer<CategoryState, CategoryActionTypes> = (
    state = initialState,
    action
): CategoryState => {
    const handler: HandlerType<CategoryState, CategoryActionTypes> =
        reducerStrategy[action.type] ?? reducerStrategy.__default__;

    return handler(state, action);
};

function defaultHandler(state: CategoryState): CategoryState {
    return state;
}

function ListSuccessHandler(state: CategoryState, action: CategoryActionTypes): CategoryState {
    if ('payload' in action) {
        console.log(normalize(action.payload, [categorySchema]));

        return { ...state, list: action.payload };
    }
    return state;
}
