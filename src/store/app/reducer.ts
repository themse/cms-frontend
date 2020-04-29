import { Reducer } from 'redux';
import { AppState, AppActionTypes, AppType } from './types';
import { ReducerStrategyType, HandlerType } from '../types';

const initialState: AppState = {
    app: null,
};

const reducerStrategy: ReducerStrategyType<AppState, AppActionTypes, AppType> = {
    [AppType.SET_SESSION]: setSessionHandler,
    __default__: defaultHandler,
};

export const appReducer: Reducer<AppState, AppActionTypes> = (
    state = initialState,
    action
): AppState => {
    const handler: HandlerType<AppState, AppActionTypes> =
        reducerStrategy[action.type] ?? reducerStrategy.__default__;

    return handler(state, action);
};

function defaultHandler(state: AppState): AppState {
    return state;
}

function setSessionHandler(state: AppState): AppState {
    return state;
}
