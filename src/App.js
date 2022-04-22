import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import { AppRoutes } from "./routes";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-100">
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
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
