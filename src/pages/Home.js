import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import { useTitle } from "../components/customHooks/title";
import ResearchInterests from "../components/ResearchInterests";
import diagram from "../assets/images/diagram.png";

const Home = () => {
  useTitle("Home");
  return (
    <div className="pb-5">
      <Banner />
      <div className="bg-black shadow px-md-5 py-4">
        <h3 className="text-center text-light">
          Laboratory for Applied Organic Synthesis
        </h3>
      </div>
      <div className="my-5 text-center">
        <h2>Welcome to the KN Research Lab</h2>
        <img
          src={diagram}
          alt="diagram"
          className="img-fluid w-25 my-4 shadow"
          style={{ borderRadius: 10 }}
        />
      </div>
      <div>
        <Container>
          <h3 className="text-center">Bio-Sketch</h3>
          <br />
          <p className="text-justify">
            Kishore Natte finished his Ph.D. studies in 2013 at the Technical
            University of Berlin in collaboration with the BAM-Federal Institute
            for Materials Research and Testing under the supervision of Joerg F.
            Friedrich. In the same year, he joined the research group of
            Matthias Beller in Leibniz Institute for Catalysis (LIKAT) for his
            postdoctoral research and worked till December 2015 and then moved
            to RWTH Aachen University. He started his independent career as a
            Senior Scientist at CSIR Indian Institute of Petroleum, Dehradun in
            2017. Just recently, he joined as an Assistant Professor (Grade 1)
            at the Indian Institute of Technology, Hyderabad. His research
            focuses on the development of new strategies and technologies in
            chemicals and drug discovery including fuel-type molecules.
          </p>
          <br />
          <hr />
        </Container>
      </div>

      <ResearchInterests icon={diagram} />
    </div>
  );
};

export default Home;
