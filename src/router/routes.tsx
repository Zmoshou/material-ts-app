import React from "react";

import Layout from "../Layout";
import PageA from "../pages/pageA";
import PageB from "../pages/pageB";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "pageA", element: <PageA /> },
      { path: "pageB", element: <PageB /> },
    ],
  },
];

export default routes;
