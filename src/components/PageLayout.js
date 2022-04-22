import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import TopBar from "./TopBar";
import { useTitle } from "./customHooks";

const PageLayout = ({ title, data }) => {
  useTitle(title);

  const [state, setState] = useState(data);
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    let temp =
      title === "Patents"
        ? data?.filter(
            (r) =>
              r.description.toLowerCase().search(search.toLowerCase()) !== -1 ||
              r.application_no.toLowerCase().search(search.toLowerCase()) !== -1
          )
        : data?.filter(
            (r) =>
              r.description.toLowerCase().search(search.toLowerCase()) !== -1 ||
              r.others.toLowerCase().search(search.toLowerCase()) !== -1
          );
    setState(temp);
  }, [search]);

  const getColors = (i) => {
    let color = "hsl(" + Math.random() * i * 360 + ", 100%, 98%)";
    return color;
  };

  return (
    <div className="mt-5 pb-5">
      <Container fluid>
        <TopBar
          placeholder={`Search ${title} Here...`}
          state={state}
          setSearch={setSearch}
        />

        <div className="row mx-auto justify-content-center">
          {state?.map((r, i) => (
            <Card
              key={i}
              className="col-md-3 col-sm-12 p-0 me-md-4 shadow my-3 border-info"
              style={{
                background: getColors(i),
              }}
            >
              <Card.Body className="d-flex flex-column">
                <p>{r.description}</p>
                <div className="alert alert-primary p-2 m-0">
                  <small>
                    <strong>Contributors : </strong>
                    {r.contributors.map((c, ci) => (
                      <span key={ci}>
                        {c} {r.contributors.length === ci + 1 ? "." : ", "}
                      </span>
                    ))}
                  </small>
                </div>
                {title !== "Patents" && (
                  <>
                    <hr />
                    <table
                      className="table table-sm p-0 m-0 table-striped table-borderless"
                      style={{ fontSize: "small" }}
                    >
                      <tbody>
                        <tr>
                          <td>Year of Published : </td>
                          <td> {r.year}</td>
                        </tr>
                        <tr>
                          <td>Concept : </td>
                          <td> {r.concept}</td>
                        </tr>
                        <tr>
                          <td>Impact Factor : </td>
                          <td> {r.impact_factor}</td>
                        </tr>
                        <tr>
                          <td>Serial : </td>
                          <td> {r.others}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}
              </Card.Body>
              {title === "Patents" ? (
                <Card.Footer className="bg-white text-success">
                  {r.application_no}
                </Card.Footer>
              ) : (
                <Card.Footer className="bg-white text-success p-0">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => window.open(r.url, "_blank")}
                  >
                    View Publication
                  </button>
                </Card.Footer>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PageLayout;
