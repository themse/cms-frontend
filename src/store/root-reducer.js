import { combineReducers } from 'redux';

import { appReducer } from './app/reducer';
import { vendorReducer } from './vendor/reducer';
import { categoryReducer } from './category/reducer';

export const rootReducer = combineReducers({
    app: appReducer,
    vendor: vendorReducer,
    category: categoryReducer,
});
