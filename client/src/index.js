import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Practice from "./Practice/Practice";
import App from "./App";
import Performance from "./Performance";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <Performance />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
