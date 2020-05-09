import { Reducer } from 'redux';
import { normalize } from 'normalizr';
import { ReducerStrategyType, HandlerType } from '../types';
import { CategoryType, CategoryState, CategoryActionTypes } from './types';
import { categorySchema } from './schema';

const initialState: CategoryState = {
    list: [],
};

const reducerStrategy: ReducerStrategyType<CategoryState, CategoryActionTypes, CategoryType> = {
    [CategoryType.FETCH_LIST]: defaultHandler,
    [CategoryType.UPDATE_LIST]: updateListHandler,
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

function updateListHandler(state: CategoryState, action: CategoryActionTypes): CategoryState {
    // @ts-ignore
    console.log(normalize(action.payload, [categorySchema]));

    // @ts-ignore
    return { ...state, list: action.payload };
}
