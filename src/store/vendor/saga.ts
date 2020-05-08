import { takeEvery, put, call } from 'redux-saga/effects';

import { VendorType } from './types';
import { updateVendorList } from './actions';
import * as Api from '../../services/api';

export function* fetchVendorListFromApi() {
    yield takeEvery(VendorType.FETCH_LIST, makeApiRequest);
}

export function* makeApiRequest() {
    const vendors = yield call(Api.vendor.getVendorList);
    yield put(updateVendorList(vendors));
}
