import React from "react";
import PageLayout from "../components/PageLayout";
import { PublicationsList } from "../data";

const Publications = () => {
  return <PageLayout title="Publications" data={PublicationsList} />;
};

export default Publications;
