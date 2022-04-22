import React from "react";
import { Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";
import { Awards } from "../data";

const Achievements = () => {
  useTitle("Achievements");
  return (
    <div className="mt-5 mt-md-4 pb-5">
      <Container>
        <p
          className="display-3 text-success text-center mb-5"
          style={{ fontWeight: 400 }}
        >
          Awards
        </p>
        {Awards.map((r, i) => (
          <div
            key={i}
            className="alert alert-info d-flex justify-content-between py-2 mx-auto"
          >
            <span>{r.desc}</span>
            <span>{"- " + r.location + " " + r.span}</span>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Achievements;
