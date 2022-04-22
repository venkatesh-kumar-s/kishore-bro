import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";
import Loading from "../components/Loading";
import kishore from "../assets/images/Kishore.jpeg";

const About = () => {
  const [state, setState] = useState(false);

  useTitle("About");

  if (state) {
    return <Loading />;
  }
  return (
    <div className="mt-5 pb-5">
      <Container>
        <div className="row my-5">
          <div className="col-md-6 col-sm-12 mb-5 mb-md-0 text-center">
            <img
              //src="https://milessmarttutoring.com/wp-content/uploads/2020/09/Organic-Chemistry-right.jpg"
              src={kishore}
              alt="bg"
              className="shadow"
              style={{ borderRadius: 10 }}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <Container>
              <h2>Dr. Kishore Natte</h2>
              <br />
              <p style={{ fontWeight: 400 }}>
                <span>Assistant Professor</span>
                <br />
                <span>Department of Chemistry</span>
                <br />
                <br />
                <span>IIT Hyderabad, Kandi</span>
                <br />
                <span>Sangareddy, 502284, India</span>
                <br />
                <br />
                <span>Phone no. +91 40 23016257</span>
                <br />
                <span>Email: kishore.natte@chy.iith.ac.in</span>
              </p>
            </Container>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 mb-4">
            <Container>
              <article>
                <h4>Professional Experience</h4>
                <br />
                <table className="table table-borderless table-hover table-striped">
                  <tbody>
                    <tr>
                      <th>2022 - Present</th>
                      <td>
                        Assistant Professor, Department of Chemistry, IIT
                        Hyderabad, India
                      </td>
                    </tr>
                    <tr>
                      <th>2017 - 2022</th>
                      <td>
                        Senior Scientist at CSIR-Indian Institute of Petroleum,
                        Dehradun, India
                      </td>
                    </tr>
                    <tr>
                      <th>2016 - 2017</th>
                      <td>RWTH Aachen University, Aachen, Germany</td>
                    </tr>
                    <tr>
                      <th>2013 - 2015</th>
                      <td>
                        Postdoctoral Research Associate, Leibniz Institute for
                        catalysis (LIKAT), Rostock, Germany Supervisor - Prof.
                        Matthias Beller
                      </td>
                    </tr>
                    <tr>
                      <th>2007 - 2009</th>
                      <td>
                        Senior Chemist, GVK Biosciences Pvt. Ltd. Hyderabad,
                        India
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </Container>
          </div>
          <hr />
          <div className="col-12 mt-4 mb-5">
            <Container>
              <article>
                <h4>Education</h4>
                <br />
                <table className="table table-borderless table-hover table-striped">
                  <tbody>
                    <tr>
                      <th>2009 - 2013</th>
                      <td>
                        Ph.D. in Chemistry, Technical University of Berlin,
                        Berlin, Germany Supervisor - Prof. Jörg F. Friedrich
                      </td>
                    </tr>
                    <tr>
                      <th>2005 - 2007</th>
                      <td>
                        M.Sc. in Organic Chemistry, Kakatiya University,
                        Warangal, India
                      </td>
                    </tr>
                    <tr>
                      <th>2003 - 2005</th>
                      <td>
                        B.Sc (Chemistry Honors), CKM Arts and Science College,
                        Warangal, India
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
