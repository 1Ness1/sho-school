import React from "react";
// import PropTypes from 'prop-types';

import FooterMain from "./FooterMain/FooterMain";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

import { dataFooter } from "../../../db/dataFooter";

const Footer = () => {
  const footerData = dataFooter.main;
  // const copyrightData = dataFooter.copyright;
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <FooterMain footerData={footerData} />
        <FooterCopyright />
      </div>
    </footer>
  );
};

// Footer.propTypes = {};

export default Footer;
