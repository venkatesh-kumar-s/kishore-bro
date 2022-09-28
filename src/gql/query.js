import { gql } from "@apollo/client";

export const PUBLICATIONS_LIST = gql`
  query publications {
    publications(order_by: { created_at: desc }) {
      contributors
      created_at
      description
      id
      impact_factor
      indexes
      journal
      url
      year
    }
  }
`;

export const PATENTS_LIST = gql`
  query patents {
    patents(order_by: { created_at: desc }) {
      contributors
      created_at
      description
      id
      patent_reference
    }
  }
`;
