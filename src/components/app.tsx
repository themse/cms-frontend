import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { Layout } from './layout';
import { HomePage } from '../pages/home';
import { ErrorPage } from '../pages/error';
import CategoryPage from '../pages/category';
import { BrandPage } from '../pages/brand';
import { categoryListRequest } from '../store/category/actions';
import { vendorListRequest } from '../store/vendor/actions';

type AppProps = {
    categoryListRequest: typeof categoryListRequest;
    vendorListRequest: typeof vendorListRequest;
};

// TODO remove state from App, need another resolution
const App: React.FC<AppProps> = ({ categoryListRequest, vendorListRequest }) => {
    useEffect(() => {
        categoryListRequest();
        vendorListRequest();
    }, []);

    return (
        <Layout>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/brands/:brandSlug" component={BrandPage} />
                <Route path="/:categorySlug" component={CategoryPage} />
                <Route render={(route) => <ErrorPage {...route} code={404} />} />
            </Switch>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            categoryListRequest,
            vendorListRequest,
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(App);
