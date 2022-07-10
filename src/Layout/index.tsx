import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default Layout;
