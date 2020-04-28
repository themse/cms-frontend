import { combineReducers, Reducer } from 'redux';

import { appReducer } from './app/reducer';
import { vendorReducer } from './vendor/reducer';
import { categoryReducer } from './category/reducer';
import { RootState } from './types';

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    app: appReducer,
    vendor: vendorReducer,
    category: categoryReducer,
});
