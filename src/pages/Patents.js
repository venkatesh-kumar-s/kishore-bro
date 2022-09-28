import { useQuery } from "@apollo/client";
import React from "react";
import PageLayout from "../components/PageLayout";
import { PATENTS_LIST } from "../gql/query";

const Patents = () => {
  const { data, loading, refetch } = useQuery(PATENTS_LIST);

  return (
    <PageLayout
      title="Patents"
      data={data?.patents}
      loading={loading}
      refetch={refetch}
    />
  );
};

export default Patents;
