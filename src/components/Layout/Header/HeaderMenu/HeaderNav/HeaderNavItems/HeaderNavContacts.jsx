import React from "react";
import useLanguages from "../../../../../../Hooks/useLanguages";

// import YellowStar from "../../../../../svg/yellow_star.svg";
import Arrow from "../../../../../../svg/arrow_1.svg";

const HeaderNavContacts = ({ item, closeMenuHandler, counter }) => {
  const langToggle = useLanguages;
  return (
    <li className="header-nav__item">
      <button onClick={closeMenuHandler} className="header-nav__link">
        <span className="header-nav__counter">
          {counter <= 9 ? "0" + counter + "." : counter + "."}
        </span>
        <span className="header-nav__title">
          {langToggle(item.title_ua, item.title_ru)}
        </span>
        <span className="header-nav__icon">
          {/* <YellowStar /> */}
          <Arrow className="header-nav__svg" />
        </span>
      </button>
    </li>
  );
};

export default HeaderNavContacts;
