import { Reducer } from 'redux';
import { AppState, AppActionTypes } from './types';

const initialState: AppState = {
    app: null,
};

export const appReducer: Reducer<AppState, AppActionTypes> = (
    state = initialState,
    action
): AppState => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
