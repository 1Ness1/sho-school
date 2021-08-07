import React from "react";
// import PropTypes from 'prop-types';

import useLanguages from "../../../../Hooks/useLanguages";

import CyrcleFooter from "../../../UI/Circles/CyrcleFooter/CyrcleFooter";
// ? Cards
import Visa from "../../../../svg/visa.svg";
import Master from "../../../../svg/master_card.svg";

// ? Socials
import Messangers from "../../../UI/Messanger/Messanger";
import Networks from "../../../UI/Networks/Networks";

const FooterMain = ({ footerData }) => {
  //  ? Сокращение к объектам
  const messangerData = footerData.messanger;
  const networksData = footerData.networks;
  const telephoneData = footerData.telephone;
  const emailData = footerData.email;

  return (
    <div className="footer__main">
      <div className="footer__content">
        <p className="footer__title">
          {useLanguages(footerData.title_ua, footerData.title_ru)}
        </p>
        <div className="footer__contacts">
          <div className="footer__item footer__item--tel ">
            <p className="footer__marker">
              {useLanguages(telephoneData.title_ua, telephoneData.title_ru) +
                ":"}
            </p>
            <a
              className="footer__link"
              href={`tel:` + telephoneData.tel.replace(/[- )(]/g, "")}
            >
              {telephoneData.tel}
            </a>
          </div>
          <div className="footer__item footer__item--email">
            <p className="footer__marker">
              {useLanguages(emailData.title_ua, emailData.title_ru)}:
            </p>
            <a className="footer__link" href={"mailto:" + emailData.mail}>
              {emailData.mail}
            </a>
          </div>
        </div>
        <CyrcleFooter />
      </div>
      <div className="footer__socials">
        <div className="footer__messenger">
          <p className="footer__marker">
            {useLanguages(messangerData.title_ua, messangerData.title_ru) + ":"}
          </p>
          <Messangers />
        </div>
        <div className="footer__networks">
          <p className="footer__marker">
            {useLanguages(networksData.title_ua, networksData.title_ru) + ":"}
          </p>
          <Networks />
        </div>
        <div className="footer__cards">
          <Visa className="footer__cards-svg" />
          <Master className="footer__cards-svg" />
        </div>
      </div>
    </div>
  );
};

// FooterMain.propTypes = {};

export default FooterMain;
