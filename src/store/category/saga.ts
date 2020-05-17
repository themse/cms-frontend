import { takeEvery, call, put } from 'redux-saga/effects';

import { CategoryType } from './types';
import { categoryListSuccess, categoryListFailed } from './actions';
import * as Api from '../../services/api';

export function* watchFetchData() {
    yield takeEvery(CategoryType.LIST_REQUEST, fetchData);
    // yield takeEvery({ type: "CREATE_ITEM_REQUEST" }, createUser);
}

export function* fetchData() {
    try {
        const categories = yield call(Api.category.getCategoryList);
        yield put(categoryListSuccess(categories));
    } catch (error) {
        yield put(categoryListFailed(error));
    }
}

export function* createUser() {}
