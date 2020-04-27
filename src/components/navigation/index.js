import React from "react";

import VendorNav from "../../containers/navigation/vendor-container";
import CategoryNav from "../../containers/navigation/category-container";

export const Navigation = () => {
  return (
    <aside id="column-left">
      <CategoryNav />
      <VendorNav />
    </aside>
  );
};
