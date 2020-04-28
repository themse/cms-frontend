import { Reducer } from 'redux';
import { VendorType, VendorActionTypes, VendorState } from './types';

const initialState: VendorState = {
    list: [],
};

export const vendorReducer: Reducer<VendorState, VendorActionTypes> = (
    state = initialState,
    action
): VendorState => {
    switch (action.type) {
        case VendorType.SET_LIST: {
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
