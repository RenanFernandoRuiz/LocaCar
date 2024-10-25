import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Carros from "./components/Carros/Carros.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Home /> },
    { path: "/carros", element: <Carros/> },
  ], 

   
 
  
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
