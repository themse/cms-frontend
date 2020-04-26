import React from "react";
import { Switch, Route } from "react-router-dom";
import { CategoryRouter } from "../router/category";
import { Home } from "../pages/Home";
import { Layout } from "./layout";

export const App = () => {
  return (
    <Layout>
      <Switch>
        {/* <Route path="/:categorySlug" component={CategoryRouter} exact /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
