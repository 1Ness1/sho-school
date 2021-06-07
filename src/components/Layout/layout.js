import React from "react";
import Header from "./Header/Header";
import dataNav from "../../db/Header/dataNav";
import dataHeader from "../../db/Header/dataHeader";

const Layout = ({ children }) => {
  const navDb = dataNav;
  const headerDb = dataHeader;
  return (
    <>
      <Header navDb={navDb} headerDb={headerDb} />
      <div id="container" className="app">
        <main id="scroll-container">{children}</main>
      </div>
    </>
  );
};

export default Layout;
