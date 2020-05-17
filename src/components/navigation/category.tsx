import React, { Fragment } from 'react';
import { CategoryNavProps } from '../../containers/navigation/category-container';

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
    const title = 'Shop for';

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
