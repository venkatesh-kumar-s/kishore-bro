import React from "react";
import Banner from "../components/Banner";
import { useTitle } from "../components/customHooks/title";
import ResearchInterests from "../components/ResearchInterests";

const Home = () => {
  useTitle("Home");
  return (
    <div className="pb-5">
      <Banner />
      <div className="my-5">
        <h2 className="text-center">Welcome to the KN Research Lab</h2>
      </div>
      <ResearchInterests />
    </div>
  );
};

export default Home;
