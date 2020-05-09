import React, { Fragment } from 'react';

const sorting = [
    {
        label: 'Default',
        value: 'default',
    },
    {
        label: 'Name (A - Z)',
        value: 'asc',
    },
    {
        label: 'Name (Z - A)',
        value: 'desc',
    },
    {
        label: 'Price (Low < High)',
        value: 'price-low',
    },
    {
        label: 'Price (High > Low)',
        value: 'price-hight',
    },
    {
        label: 'Rating (Highest)',
        value: 'rating-high',
    },
    {
        label: 'Rating (Lowest)',
        value: 'rating-low',
    },
    {
        label: 'Model (A - Z)',
        value: 'model-asc',
    },
    {
        label: 'Model (Z - A)',
        value: 'model-desc',
    },
];

const productLimit = [
    {
        label: '15',
        value: 15,
    },
    {
        label: '25',
        value: 25,
    },
    {
        label: '50',
        value: 50,
    },
    {
        label: '75',
        value: 75,
    },
    {
        label: '100',
        value: 100,
    },
];

export const FilterSort = () => {
    return (
        <Fragment>
            <div className="form-group input-group first-filter">
                <label className="input-group-addon" htmlFor="input-sort">
                    Sort By:
                </label>
                <select id="input-sort" className="form-control">
                    {sorting.map((sort) => (
                        <option key={sort.value} value={sort.value}>
                            {sort.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group input-group second-filter">
                <label className="input-group-addon" htmlFor="input-limit">
                    Show:
                </label>
                <select id="input-limit" className="form-control">
                    {productLimit.map((limit) => (
                        <option key={limit.value} value={limit.value}>
                            {limit.label}
                        </option>
                    ))}
                </select>
            </div>
        </Fragment>
    );
};
