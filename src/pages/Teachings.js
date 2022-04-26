import React from "react";
import { Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";

const Teachings = () => {
  useTitle("Teachings");
  return (
    <div className="mt-5 pb-5">
      <Container>
        <table
          className="table table-striped table-hover table-borderless table-primary shadow-sm text-center"
          style={{ borderRadius: 10, overflow: "hidden" }}
        >
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CY5020</td>
              <td>Advanced Organic Chemistry of Multiple Bonds</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Teachings;
