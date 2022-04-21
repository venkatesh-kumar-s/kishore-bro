import React, { useState } from "react";
import { useTitle } from "../components/customHooks/title";
import Loading from "../components/Loading";

const About = () => {
  const [state, setState] = useState(true);

  useTitle("About");

  if (state) {
    return <Loading />;
  }
  return <div>About</div>;
};

export default About;
