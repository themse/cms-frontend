import React, { Fragment } from 'react';
import { useFetching } from '../../hooks/useFetching';

type CategoryNavProps = {
    categories: Array<any>;
    setCategoryListRequest: (args?: any) => Promise<any>;
};

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, setCategoryListRequest }) => {
    const title = 'Shop for';

    useFetching(setCategoryListRequest);

    return (
        <Fragment>
            <h3 className="rc-heading no-margin-top">{title}</h3>
            <ul className="list-unstyled rc-vertical-navigation">
                {categories.map((category) => {
                    return (
                        <li key={category.uid}>
                            <a href={category.slug} className="list-group-item">
                                {category.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
};
