import React from "react";
import Banner from "../components/Banner";
import { useTitle } from "../components/customHooks/title";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
