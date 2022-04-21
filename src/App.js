import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          {AppRoutes?.map((r, i) => (
            <Route key={i} path={r?.path} element={r?.component} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
