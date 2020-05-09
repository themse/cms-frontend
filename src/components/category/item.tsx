import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FilterSort } from './filter-sort';
import { ProductList } from '../product/list';

type CategoryItemProps = {
    category: any;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <Fragment>
            <div className="rc-headline-section category-sort-filters">
                <div className="left-section">
                    <h2 className="rc-heading no-margin-top category-page">{category.name}</h2>
                </div>
                <div className="right-section">
                    <FilterSort />
                </div>
            </div>
            <ul className="list-unstyled category-categories">
                <li>
                    <Link to="/" title="PC">
                        PC
                    </Link>
                </li>
                <li>
                    <Link to="/" title="Mac">
                        Mac
                    </Link>
                </li>
            </ul>
            <div className="clearfix" />
            <hr className="category-page" />
            <div className="row product-row">
                <ProductList />
            </div>
            <div className="row">
                <div className="col-sm-6 text-left" />
                <div className="col-sm-6 text-right">Showing 1 to 13 of 13 (1 Pages)</div>
            </div>
        </Fragment>
    );
};
