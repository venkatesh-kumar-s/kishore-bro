import { useQuery } from "@apollo/client";
import React from "react";
import PageLayout from "../components/PageLayout";
import { PUBLICATIONS_LIST } from "../gql/query";

const Publications = () => {
  const { data, loading, refetch } = useQuery(PUBLICATIONS_LIST);

  return (
    <PageLayout
      title="Publications"
      data={data?.publications}
      loading={loading}
      refetch={refetch}
    />
  );
};

export default Publications;
