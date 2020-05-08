import React from 'react';
import { FunctionalPage } from '../common/types';

type ProductCardProps = {};

type Params = {
    productSlug: string;
};

export const ProductCardPage: FunctionalPage<ProductCardProps, Params> = ({ match }) => {
    return (
        <p className="text-center">
            ProductCard <b>{match.params.productSlug}</b>
        </p>
    );
};
