import React from 'react';
import { FunctionalPage } from '../common/types';

type BrandProps = {};

type Params = {
    brandSlug: string;
};

export const BrandPage: FunctionalPage<BrandProps, Params> = ({ match }) => {
    return (
        <p className="text-center">
            Brand <b>{match.params.brandSlug}</b>
        </p>
    );
};
