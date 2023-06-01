import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
