import React from 'react';
import { render } from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './store/config';
import { App } from './components/app';
import { RootState } from './store/types';

const store: Store<RootState> = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
