import React from "react";
import ReactDOM from "react-dom/client";
import Practice from "./Practice/Practice";
import Evaluate from "./Evaluate/Evaluate";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Goodbye Entropy</h1>,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
  {
    path: "/evaluate",
    element: <Evaluate />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
