import { takeEvery, call, put } from 'redux-saga/effects';

import { CategoryType } from './types';
import { updateCategoryList } from './actions';
import * as Api from '../../services/api';

export function* fetchCategoryListFromApi() {
    yield takeEvery(CategoryType.FETCH_LIST, makeApiRequest);
}

export function* makeApiRequest() {
    const categories = yield call(Api.category.getCategoryList);
    yield put(updateCategoryList(categories));
}
