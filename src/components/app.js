import React from "react";

import { Layout } from "./layout";
import { VendorList } from "./vendor/list";
import { ProductList } from "./product/list";
import { Navigation } from "./navigation";
import { SlideShow } from "./slideshow";

export const App = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 hidden-xs">
            <Navigation />
          </div>
          <div id="content" className="col-sm-9">
            <SlideShow />
            <ProductList />
            <VendorList />
          </div>
        </div>
      </div>
    </Layout>
  );
};
