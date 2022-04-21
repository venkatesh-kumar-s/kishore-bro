import Home from "../pages/Home";
import About from "../pages/About";
import Group from "../pages/Group";
import Publications from "../pages/Publications";

export const AppRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/group",
    component: <Group />,
  },

  {
    path: "/publications",
    component: <Publications />,
  },

  {
    path: "*",
    component: (
      <div>
        <p>Falling Back...</p>
      </div>
    ),
  },
];
