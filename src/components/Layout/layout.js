import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Instagram from "./Instagram/Instagram";
import dataNav from "../../db/Header/dataNav";
import { graphql } from "gatsby";

import "../../../i18n";
import { dataNavigation } from "../../db/dataNavigation";
// import Modal from "./Modal/Modal";
const Layout = ({ children, tapLink }) => {
  const headerData = dataNavigation;
  const navDb = dataNav;

  const query = graphql`
    query($language: String!) {
      locales: allLocale(filter: { language: { eq: $language } }) {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
    }
  `;
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
