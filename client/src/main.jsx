import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
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

    <BrowserRouter>

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

    </BrowserRouter>

  </React.StrictMode>
);