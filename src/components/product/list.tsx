import React, { Fragment } from 'react';
import { ProductItem } from './item';

import { product as productImg } from '../../common/images';

type ProductListProps = {};

export const ProductList: React.FC<ProductListProps> = () => {
    return (
        <div className="row">
            {Array(8)
                .fill(1)
                .map((product, idx) => (
                    <ProductItem
                        key={idx}
                        name="MacBook Pro 13"
                        slug="#"
                        image={productImg}
                        price="$602.00"
                        tax="$500.00"
                    />
                ))}
        </div>
    );
};
