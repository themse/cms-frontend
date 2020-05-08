import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from './root-reducer';
import { RootState } from './types';
import { rootSaga } from './root-saga';

export const configureStore = (): Store<RootState> => {
    const sagaMiddleware = createSagaMiddleWare();

    const middlewares = [thunk, sagaMiddleware];

    const store: Store<RootState> = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
