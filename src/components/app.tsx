import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from '../pages/home';
import { ErrorPage } from '../pages/error';
import { CategoryPage } from '../pages/category';
import { BrandPage } from '../pages/brand';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
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
