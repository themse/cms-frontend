import { all } from 'redux-saga/effects';

import { watchFetchData as vendorSaga } from './vendor/saga';
import { watchFetchData as categorySaga } from './category/saga';

export function* rootSaga() {
    yield all([vendorSaga(), categorySaga()]);
}
