import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

// import './Header.sass'

const Header = ({ navDb, headerDb }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  const burgerClickHandler = () => {
    setActive(!active);
    setOpen(!open);
  };

  const closeMenuHandler = () => {
    setActive(false);
    setOpen(false);
  };

  const openSubMenu = () => {
    setOpenSub(!openSub);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderMenu
            active={active}
            closeMenuHandler={closeMenuHandler}
            openSubMenu={openSubMenu}
            openSub={openSub}
            navDb={navDb}
            headerDb={headerDb}
          />
          <HeaderBurger
            burgerClickHandler={burgerClickHandler}
            active={active}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
