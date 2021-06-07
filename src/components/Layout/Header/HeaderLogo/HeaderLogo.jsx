import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import ShoLogo from "../../../../svg/main_logo.svg";

import "./HeaderLogo";

const HeaderLogo = () => {
  return (
    <Link to="/" className="header__logo">
      <ShoLogo />
    </Link>
  );
};

export default HeaderLogo;
