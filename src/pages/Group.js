import React from "react";
import { Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";

const Group = () => {
  useTitle("Groups");
  return (
    <div className="mt-5 pb-5">
      <Container>
        <p
          className="display-4 text-center text-primary mb-sm-5"
          style={{ fontWeight: 400 }}
        >
          Group
        </p>
        <article className="mt-sm-5">
          <h3>Ph.D. Positions :</h3>
          <p className="text-justify">
            We are looking for motivated Ph.D. students to join us. Candidates
            with a valid JRF CSIR/UGC/DST-Inspire and interested in organic
            synthesis, catalysis & medicinal chemistry can directly e-mail me (
            <a href="mailto:kishore.natte@chy.iith.ac.in">
              kishore.natte@chy.iith.ac.in
            </a>
            )
          </p>
        </article>

        <article className="mt-5">
          <h3>Postdoc Positions :</h3>
          <p className="text-justify">
            You can join the group with externally funded projects through SERB
            National Postdoctoral Fellowship, UGC Postdoctoral Fellowship, and
            DST Women Scientist. Interested candidates having Ph.D. degree in
            organic synthesis or related areas can directly e-mail me (
            <a href="mailto:kishore.natte@chy.iith.ac.in">
              kishore.natte@chy.iith.ac.in
            </a>
            )
          </p>
        </article>
      </Container>
    </div>
  );
};

export default Group;
