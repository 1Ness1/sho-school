import React from "react";
import useLanguages from "../../../../../../Hooks/useLanguages";
import SubMenu from "./SubMenu/SubMenu";
import Arrow from "../../../../../../svg/arrow.svg";

const HeaderNavServices = ({ item, counter, openSubMenu, openSub }) => {
  const langToggle = useLanguages;
  return (
    <li className="header-nav__item header-nav__item--services">
      <button onClick={openSubMenu} className="header-nav__link">
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
      <SubMenu subMenu={item.subMenu} openSub={openSub} />
    </li>
  );
};

export default HeaderNavServices;
