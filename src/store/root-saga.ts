import { all } from 'redux-saga/effects';

import { fetchVendorListFromApi } from './vendor/saga';
import { fetchCategoryListFromApi } from './category/saga';

export function* rootSaga() {
    yield all([fetchVendorListFromApi(), fetchCategoryListFromApi()]);
}
