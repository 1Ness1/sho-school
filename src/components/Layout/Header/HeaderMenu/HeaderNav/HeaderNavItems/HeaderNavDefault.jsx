import React from "react";
import useLanguages from "../../../../../../Hooks/useLanguages";
import { Link } from "gatsby-plugin-react-i18next";

import Arrow from "../../../../../../svg/arrow.svg";

const HeaderNavDefault = ({ item, counter }) => {
  const langToggle = useLanguages;
  return (
    <li className="header-nav__item">
      <Link to={item.link} className="header-nav__link">
        <span className="header-nav__counter">
          {counter <= 9 ? "0" + counter + "." : counter + "."}
        </span>
        <span className="header-nav__title">
          {langToggle(item.title_ua, item.title_ru)}
        </span>
        <Arrow className="header-nav__svg" />
      </Link>
    </li>
  );
};

export default HeaderNavDefault;
