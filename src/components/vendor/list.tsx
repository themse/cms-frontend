import React, { Fragment } from 'react';
import { VendorSlider } from './slider';

type VendorListProps = {};

export const VendorList: React.FC<VendorListProps> = () => {
    return (
        <Fragment>
            <h3 className="rc-heading">We offer products from</h3>
            <VendorSlider />
        </Fragment>
    );
};
