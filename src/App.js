import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";

import HomePage from "./pages/HomePage";

import "./styles/main.scss";

const routes = [{ path: "/", element: <HomePage /> }];

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            index={route.path === "/"}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
};
export default App;
