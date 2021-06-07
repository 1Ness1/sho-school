import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderNumber from "./HeaderNumber/HeaderNumber";
import HeaderLanguage from "./HeaderLanguage/HeaderLanguage";
import HeaderCurrency from "./HeaderCurrency/HeaderCurrency";

const HeaderMenu = ({ openSubMenu, openSub, active, navDb, headerDb }) => {
  return (
    <div
      className={
        !active ? "header__menu" : "header__menu header__menu--is-open"
      }
    >
      <div className="header__menu-wrapper">
        <div
          className={
            !active
              ? "header__menu-overflow"
              : "header__menu-overflow header__menu-overflow--is-open"
          }
        >
          <HeaderNav
            className="header_nav"
            openSubMenu={openSubMenu}
            openSub={openSub}
            navDb={navDb}
          />
          <HeaderNumber className="header__num" headerDb={headerDb} />
          <div className="header__tabs">
            <HeaderLanguage headerDb={headerDb} />
            <HeaderCurrency headerDb={headerDb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
