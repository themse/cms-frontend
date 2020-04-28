import React, { Fragment } from 'react';

import { useFetching } from '../../hooks/useFetching';

type VendorNavProps = {
    vendors: Array<any>;
    setVendorListRequest: (args?: any) => Promise<any>;
};

export const VendorNav: React.FC<VendorNavProps> = ({ vendors, setVendorListRequest }) => {
    const title = 'Brands';

    useFetching(setVendorListRequest);

    return (
        <Fragment>
            <h3 className="rc-heading margin-top-forty">{title}</h3>
            <ul className="list-unstyled rc-vertical-navigation">
                {vendors.map((vendor) => {
                    return (
                        <li key={vendor.uid}>
                            <a href={vendor.slug} className="list-group-item">
                                {vendor.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
};
