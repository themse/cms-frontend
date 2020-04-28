import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as Api from '../../services/api';
import { setVendorList } from './actions';
import { RootState } from '../types';

export const setVendorListRequest = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => async (dispatch) => {
    try {
        const vendors = await Api.vendor.getVendorList();
        dispatch(setVendorList(vendors));
    } catch (error) {
        console.error(error);
    }
};
