import React, { Fragment } from "react";

import { useFetching } from "../../hooks/useFetching";

export const VendorNav = ({ vendors, setVendorListRequest }) => {
  const title = "Brands";

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
