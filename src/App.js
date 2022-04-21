import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import { AppRoutes } from "./routes";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            {AppRoutes?.map((r, i) => (
              <Route key={i} path={r?.path} element={r?.component} />
            ))}
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
