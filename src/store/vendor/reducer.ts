import { Reducer } from 'redux';
import { VendorType, VendorActionTypes, VendorState } from './types';
import { ReducerStrategyType, HandlerType } from '../types';

const initialState: VendorState = {
    list: [],
};

const reducerStrategy: ReducerStrategyType<VendorState, VendorActionTypes, VendorType> = {
    [VendorType.LIST_REQUEST]: defaultHandler,
    [VendorType.LIST_SUCCESS]: listSuccessHandler,
    [VendorType.LIST_FAILED]: defaultHandler,
    __default__: defaultHandler,
};

export const vendorReducer: Reducer<VendorState, VendorActionTypes> = (
    state = initialState,
    action
): VendorState => {
    const handler: HandlerType<VendorState, VendorActionTypes> =
        reducerStrategy[action.type] ?? reducerStrategy.__default__;

    return handler(state, action);
};

function defaultHandler(state: VendorState): VendorState {
    return state;
}

function listSuccessHandler(state: VendorState, action: VendorActionTypes): VendorState {
    if ('payload' in action) {
        return {
            ...state,
            list: action.payload,
        };
    }
    return state;
}
