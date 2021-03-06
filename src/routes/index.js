import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Group = React.lazy(() => import("../pages/Group"));
const Publications = React.lazy(() => import("../pages/Publications"));
const Patents = React.lazy(() => import("../pages/Patents"));
const Achievements = React.lazy(() => import("../pages/Achievements"));
const Researches = React.lazy(() => import("../pages/Researches"));
const Teachings = React.lazy(() => import("../pages/Teachings"));
const FallBack = React.lazy(() => import("../components/FallBack"));

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
    path: "/researches",
    component: <Researches />,
  },
  {
    path: "/teachings",
    component: <Teachings />,
  },

  {
    path: "*",
    component: <FallBack />,
  },
];
