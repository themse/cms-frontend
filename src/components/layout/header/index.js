import React, { Fragment } from "react";
import { TopMenu } from "./desktop/top-menu";
import { MainMenu } from "./desktop/main-menu";

export const Header = () => {
  return (
    <Fragment>
      <header>
        <TopMenu />
        <MainMenu />
      </header>
    </Fragment>
  );
};
