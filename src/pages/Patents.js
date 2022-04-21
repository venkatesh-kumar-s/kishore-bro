import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";
import TopBar from "../components/TopBar";
import { PatentsList } from "../data";

const tone = ["#CADEFC", "#E3FDFD", "#E4F9F5"];

const Patents = () => {
  useTitle("Patents");
  const [state, setState] = useState(PatentsList);
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    let temp = PatentsList?.filter(
      (r) =>
        r.description.toLowerCase().search(search.toLowerCase()) !== -1 ||
        r.application_no.toLowerCase().search(search.toLowerCase()) !== -1
    );
    setState(temp);
  }, [search]);
  return (
    <div className="my-5">
      <Container>
        <TopBar
          placeholder="Search Patents Here..."
          state={state}
          setSearch={setSearch}
        />
        <div className="row mx-auto justify-content-center">
          {state?.map((r, i) => (
            <Card
              key={i}
              className="col-md-3 col-sm-12 p-0 me-md-4 shadow-sm my-3"
              style={{ background: tone[i] }}
            >
              <Card.Body>
                <p>{r.description}</p>
                <div className="alert alert-primary p-2 m-auto">
                  <small>
                    <strong>Contributors : </strong>
                    {r.contributors.map((c, ci) => (
                      <span key={ci}>
                        {c} {r.contributors.length === ci + 1 ? "." : ", "}
                      </span>
                    ))}
                  </small>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white text-success">
                {r.application_no}
              </Card.Footer>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Patents;
