import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

type VendorNavProps = {
    vendors: Array<any>;
    fetchVendorList: () => any;
};

export const VendorNav: React.FC<VendorNavProps> = ({ vendors, fetchVendorList }) => {
    const title = 'Brands';

    useEffect(() => {
        fetchVendorList();
    }, []);

    return (
        <Fragment>
            <h3 className="rc-heading margin-top-forty">{title}</h3>
            <ul className="list-unstyled rc-vertical-navigation">
                {vendors.map((vendor) => {
                    return (
                        <li key={vendor.uid}>
                            <Link to={`/brands/${vendor.slug}`} className="list-group-item">
                                {vendor.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
};
