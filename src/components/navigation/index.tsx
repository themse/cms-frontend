import React from 'react';

import VendorNav from '../../containers/navigation/vendor-container';
import CategoryNav from '../../containers/navigation/category-container';

type NavigationProps = {};

export const Navigation: React.FC<NavigationProps> = () => {
    return (
        <aside id="column-left">
            <CategoryNav />
            <VendorNav />
        </aside>
    );
};
