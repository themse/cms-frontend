import { takeLatest, put, call } from 'redux-saga/effects';

import { VendorType } from './types';
import { vendorListSuccess, vendorListFailed } from './actions';
import * as Api from '../../services/api';

export function* watchFetchData() {
    yield takeLatest(VendorType.LIST_REQUEST, fetchData);
}

export function* fetchData() {
    try {
        const vendors = yield call(Api.vendor.getVendorList);
        yield put(vendorListSuccess(vendors));
    } catch (error) {
        yield put(vendorListFailed(error));
    }
}
