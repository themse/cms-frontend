import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CategoryRouter } from '../router/category';
import { Home } from '../pages/Home';
import { Layout } from './layout';
import { ProductCard } from '../pages/ProductCard';

export const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route
                    exact
                    path="/product/:productSlug"
                    render={(route) => {
                        console.log(route);

                        return <ProductCard />;
                    }}
                />
                <Route path="/:categorySlug" component={CategoryRouter} />
            </Switch>
        </Layout>
    );
};
