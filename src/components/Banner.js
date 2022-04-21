import React from "react";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: "#11111150",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 100,
        }}
      ></div>
      <img src={banner} alt="IIT" className="img-fluid shadow" />
    </div>
  );
};

export default Banner;
