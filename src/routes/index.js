import Home from "../pages/Home";
import About from "../pages/About";
import Group from "../pages/Group";
import Publications from "../pages/Publications";
import Patents from "../pages/Patents";
import Achievements from "../pages/Achievements";

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
    path: "/patents",
    component: <Patents />,
  },
  {
    path: "/achievements",
    component: <Achievements />,
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
