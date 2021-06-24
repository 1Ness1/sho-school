import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Instagram from "./Instagram/Instagram";
import dataNav from "../../db/Header/dataNav";
import { dataNavigation } from "../../db/dataNavigation";

const Layout = ({ children, tapLink }) => {
  const headerData = dataNavigation;
  const navDb = dataNav;
  return (
    <>
      <Header navDb={navDb} headerData={headerData} />
      <div id="container" className="app">
        <main id="scroll-container">{children}</main>
      </div>
      <Instagram tapLink={tapLink} />
      <Footer />
    </>
  );
};

export default Layout;
