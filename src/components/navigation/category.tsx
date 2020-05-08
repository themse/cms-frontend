import React, { Fragment, useEffect } from 'react';

type CategoryNavProps = {
    categories: Array<any>;
    fetchCategoryList: () => any;
};

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, fetchCategoryList }) => {
    const title = 'Shop for';

    useEffect(() => {
        fetchCategoryList();
    }, []);

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
