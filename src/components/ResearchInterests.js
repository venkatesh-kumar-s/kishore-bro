import React from "react";
import { Container } from "react-bootstrap";

const ResearchInterests = () => {
  return (
    <div className="my-5">
      <Container>
        <h3 className="text-center">Research Interests</h3>
        <p className="text-justify">
          It is close to impossible to imagine human life without organic
          molecules such as drugs, life science reagents, polymers,
          agrochemicals, energy, materials, and cosmetics. Thus, the production
          of any target molecule without the formation of by-products is very
          demanding from the viewpoint of saving energy & reducing chemical
          wastes. At the same time, it is also very important to understand the
          principles guiding the bond breaking and formation result. To make all
          these possible, the use of catalysts is very important in chemical
          reactions, which will turn raw materials into useful products. In this
          regard, my research program will be dedicated to the development and
          application of new catalytic methods in the area of organic chemistry
          to create organic molecules (with high selectivity, yields, and
          purity) that are useful in market-oriented consumer and household
          products. In order to tackle these challenges, the research will be
          driven by the following important areas.
        </p>
        <ul>
          <li>Organofluorine chemistry</li>
          <li>
            Utilization of CO2 and renewable substances in organic
            transformations
          </li>
          <li>C-H activation/functionalization</li>
          <li>Deuteration and Tritiation of potential organic compounds </li>
          <li>Photocatalysis and Electrochemistry in organic synthesis </li>
          <li>Total Synthesis of Bioactive Natural Products </li>
        </ul>
      </Container>
    </div>
  );
};

export default ResearchInterests;
