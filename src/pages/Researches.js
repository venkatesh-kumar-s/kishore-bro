import React from "react";
import { Container } from "react-bootstrap";
import ResearchInterests from "../components/ResearchInterests";
import { useTitle } from "../components/customHooks/title";

const Researches = () => {
  useTitle("Research Interests");
  return (
    <div className="mt-5 pb-5">
      <ResearchInterests />
    </div>
  );
};

export default Researches;
