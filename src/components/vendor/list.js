import React, { Fragment } from "react";
import { vendors } from "../../common/images";
import { VendorItem } from "./item";

// TODO get vendors from db
export const VendorList = () => {
  return (
    <Fragment>
      <h3 className="rc-heading">We offer products from</h3>
      {Object.entries(vendors).map(([key, value]) => (
        <div key={key} id="carousel0" className="owl-carousel">
          <VendorItem name={key} image={value} slug="#" />
        </div>
      ))}
    </Fragment>
  );
};
