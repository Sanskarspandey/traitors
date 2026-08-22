import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import TakePart from "./TakePart";
import Admin from "./Admin";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/take-part"
          element={<TakePart />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </HashRouter>

  </React.StrictMode>
);