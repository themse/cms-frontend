import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from './root-reducer';
import { RootState } from './types';

export const configureStore = (): Store<RootState> => {
    const middlewares = [thunk];

    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
};
