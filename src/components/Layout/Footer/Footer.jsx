import React from "react";
// import PropTypes from 'prop-types';

import FooterMain from "./FooterMain/FooterMain";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

import { dataContacts } from "../../../db/dataContacts";

const Footer = () => {
  const contactsData = dataContacts.main;
  // const copyrightData = dataFooter.copyright;
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <FooterMain footerData={contactsData} />
        <FooterCopyright />
      </div>
    </footer>
  );
};

// Footer.propTypes = {};

export default Footer;
