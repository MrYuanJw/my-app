import React from "react";

const Excel = React.lazy(() => import("../comment/excel/excel"));
const Details = React.lazy(() => import("../comment/details/index"));
const Gmme = React.lazy(() => import("../comment/gmme/index"));
const Tchishe = React.lazy(() => import("../comment/Tchishe/index"));
const Context = React.lazy(() => import("../comment/Context/index"));
const Mine = React.lazy(() => import("../comment/mine/index"));

// import Details from "../pages/details";
import { Navigate } from "react-router";
const routes = [
  {
    path: "/demo",
    element: <Excel />,
    children: [
      // {
      //     path:'params/:id/:title/:content',
      //     element:<Params/>,
      // }
      // {
      //     path:'search',
      //     element:<SearchRoute/>,
      // },
      // {
      //     path:'state',
      //     element:<StateRoute/>,
      // },
    ],
  },
  {
    path: "/",
    exact: true,
    element: (
      <>
        <Tchishe />
      </>
    ),
    children: [
      // {
      //     path:'details',
      //     element:<Details/>,
      // }
    ],
  },
  {
    path: "/Context",
    exact: true,
    element: (
      <>
        <Context />
      </>
    ),
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/mine",
    element: (
      <>
        <Mine />
      </>
    ),
  },
  {
    path: "/GGGG",
    element: (
      <>
        <Gmme></Gmme>
      </>
    ),
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
export default routes;
