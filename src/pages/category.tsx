import React, { Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { FunctionalPage } from '../common/types';
import { ErrorPage } from './error';
import { ProductCardPage } from './product-card';

// TODO get from redux
const categories = [
    {
        id: 0,
        name: 'Some Title 0',
        slug: 'some-title-0',
        subcategories: [1, 2, 3, 4],
    },
    {
        id: 1,
        name: 'Some Title-1',
        slug: 'some-title-1',
        subcategories: [2],
    },
    {
        id: 2,
        name: 'Some Title-2',
        slug: 'some-title-2',
        subcategories: [3],
    },
    {
        id: 3,
        name: 'Some Title 3',
        slug: 'some-title-3',
        subcategories: [4],
    },
    {
        id: 4,
        name: 'Some Title-4',
        slug: 'some-title-4',
        subcategories: [5],
    },
    {
        id: 5,
        name: 'Some Title-5',
        slug: 'some-title-5',
        subcategories: [6],
    },
    {
        id: 6,
        name: 'Some Title-6',
        slug: 'some-title-6',
        subcategories: [7],
    },
    {
        id: 7,
        name: 'Some Title-7',
        slug: 'some-title-7',
        subcategories: [],
    },
];

type CategoryProps = {};

type Params = {
    categorySlug: string;
};

export const CategoryPage: FunctionalPage<CategoryProps, Params> = ({ match }) => {
    // TODO move to domain category
    const category = categories.find((item) => item.slug === match.params.categorySlug);

    if (!category) {
        // TODO research optional types
        // return <ErrorPage code={404} />;
        return (
            <p className="text-center">
                Category Page <b>{match.params.categorySlug}</b>
            </p>
        );
    }

    return (
        <Fragment>
            {match.isExact && (
                <Fragment>
                    <p>{category.name}</p>
                    {category.subcategories.map((subcategoryId) => {
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
};
