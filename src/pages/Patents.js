import React from "react";
import PageLayout from "../components/PageLayout";
import { PatentsList } from "../data";

const Patents = () => {
  return <PageLayout title="Patents" data={PatentsList} />;
};

export default Patents;
