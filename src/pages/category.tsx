import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import { FunctionalPage } from '../common/types';
import { ErrorPage } from './error';
import { ProductCardPage } from './product-card';
import { CategoryItem } from '../components/category/item';
import { Navigation } from '../components/navigation';
import { RootState } from '../store/types';
import { categoryListSelector } from '../store/category/selectors';

type CategoryProps = {
    categories: any[];
};

type Params = {
    categorySlug: string;
};

const CategoryPage: FunctionalPage<CategoryProps, Params> = ({ match, categories = [] }) => {
    const category = categories.find((item) => item.slug === match.params.categorySlug);

    if (!category) {
        // TODO research optional types
        // return <ErrorPage code={404} />;
        return <div className="container">Error</div>;
    }

    return (
        <Fragment>
            {match.isExact && (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 hidden-xs">
                            <Navigation />
                        </div>
                        <div className="col-sm-9" id="content">
                            <CategoryItem category={category} />
                        </div>
                    </div>
                </div>
            )}
            <Switch>
                {category.subcategories.length > 0 ? (
                    <Route path={`${match.path}/:categorySlug`} component={CategoryPage} />
                ) : (
                    <Route path={`${match.path}/:productSlug`} component={ProductCardPage} />
                )}
            </Switch>
        </Fragment>
    );
    /* TODO
    return (
        <Fragment>
            {match.isExact && (
                <Fragment>
                    <p>{category.name}</p>
                    {category.subcategories.map((subcategoryId: string) => {
                        const subcategory = categories.find(
                            (category) => category.id === subcategoryId
                        );
                        return (
                            subcategory && (
                                <Link
                                    key={subcategory.slug}
                                    to={`${match.url}/${subcategory.slug}`}
                                >
                                    {subcategory.name}
                                </Link>
                            )
                        );
                    })}
                </Fragment>
            )}
            <Switch>
                {category.subcategories.length > 0 ? (
                    <Route path={`${match.path}/:categorySlug`} component={CategoryPage} />
                ) : (
                    <Route path={`${match.path}/:productSlug`} component={ProductCardPage} />
                )}
            </Switch>
        </Fragment>
    );
    */
};

const mapStateToProps = (state: RootState) => {
    return {
        categories: categoryListSelector(state),
    };
};

export default connect(mapStateToProps)(CategoryPage);
