import React, { Fragment } from "react";
import { VendorSlider } from "./slider";

// TODO get vendors from db
export const VendorList = () => {
  return (
    <Fragment>
      <h3 className="rc-heading">We offer products from</h3>
      <VendorSlider />
    </Fragment>
  );
};
