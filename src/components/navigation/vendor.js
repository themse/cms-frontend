import React, { Fragment } from "react";

export const VendorNav = ({ vendors }) => {
  const title = "Brands";

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
