import React from "react";

import Navbar from "../components/Navbar";
import TextForms from "../components/TextForms";

const Homepage = () => {
  return (
    <>
      <Navbar title="Ramesh" aboutText="About Ramesh" />
      <div className="container">
        <TextForms heading="Enter your messages" />
      </div>
    </>
  );
};

export default Homepage;
