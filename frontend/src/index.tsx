import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

// Components
import { ErrorPage, Login, Register } from "./components/pages";
import Main from "./components/layouts/Main";
import Settings from "./components/layouts/Settings";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"",
        element:<App/>
      }
    ]
  },
  {
    path:'/',
    element:<Settings/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      }
    ]
  }
])
const client = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
