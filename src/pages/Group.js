import React from "react";
import { Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";
import { group, alumni } from "../data";
import "./pages.css";

const Group = ({ show = true }) => {
  useTitle("Groups");
  return (
    <div className="mt-5 pb-5">
      <Container>
        <p
          className="display-5 text-center text-primary mb-sm-5"
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
        <br />
        {show && (
          <>
            <hr />
            <div className="text-center mb-5">
              <h3>Group Members</h3>
              <br />
              <div className="row justify-content-center mx-2">
                {group.map((r, i) => (
                  <div
                    key={i}
                    className="card col-md-2 col-sm-12 p-0 mx-2 my-3 my-md-0 shadow border-light border-2"
                    style={{ borderRadius: 10, overflow: "hidden" }}
                  >
                    <div className="members">
                      <img
                        src={r.avatar}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="card-body bg-light">
                      <p className="my-auto text">
                        <b className="text-success">{r.name}</b>
                        <br />
                        <small className="text-start sub-text">
                          <span>{r.designation}</span>
                          <br />
                          <span>{r.qualification}</span>
                        </small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <hr />
              {/* Alumni */}
              <div className="text-center">
                <h3>Alumni</h3>
                <div className="row justify-content-center mx-2 my-5">
                  {alumni.map((r, i) => (
                    <div
                      key={i}
                      className="col-sm-12 col-md-3 card shadow bg-dark text-light mx-2 p-0 my-3 my-md-0"
                      style={{ borderRadius: 10 }}
                    >
                      <div className="card-body">
                        <h4 className="text">{r.name}</h4>
                        <p className="sub-text">{r.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Group;
