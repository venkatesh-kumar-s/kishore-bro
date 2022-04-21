import React, { useEffect, useState } from "react";
import "./components.css";

const TopBar = ({ placeholder, setSearch }) => {
  return (
    <div className="mb-5 search mx-auto">
      <input
        type="search"
        className="form-control shadow search mx-auto"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default TopBar;
