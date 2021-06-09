import React from "react";
import Nunox from "../../../../svg/nunox_logo.svg";
// import PropTypes from 'prop-types';

const FooterCopyright = () => {
  return (
    <div className="footer__copyright">
      <div className="footer__copyright-content">
        <p className="footer__text">2021 Шо?School© Всі права захищені.</p>
        <a className="footer__copyright-link" href="/">
          Конфіденційність
        </a>
        <a className="footer__copyright-link" href="/">
          Угода Користувача
        </a>
      </div>
      <div className="footer__author">
        <a className="footer__author-link" href="/">
          <Nunox />
        </a>
      </div>
    </div>
  );
};

// FooterCopyright.propTypes = {};

export default FooterCopyright;
