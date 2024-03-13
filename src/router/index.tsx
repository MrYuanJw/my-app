import React from "react";
import Home from "../excel";
import Details from "../comment/details/index";
import Gmme from "../comment/gmme/index";
import Tchishe from "../comment/Tchishe/index";
// import Details from "../pages/details";
import Mine from "../comment/mine";
import { Navigate } from "react-router";
const routes = [
  {
    path: "/demo",
    element: <Home />,
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
        <Tchishe/>
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
    path: "/details",
    element: <Details />,
  },
  {
    path: "/mine",
    element: (
      <>
        <Mine/>
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
