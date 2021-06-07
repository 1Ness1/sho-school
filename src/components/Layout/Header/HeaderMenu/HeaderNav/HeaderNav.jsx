import React from "react";
import HeaderNavDefault from "./HeaderNavItems/HeaderNavDefault";
import HeaderNavServices from "./HeaderNavItems/HeaderNavServices";
import HeaderNavContacts from "./HeaderNavItems/HeaderNavContacts";

const HeaderNav = ({ navDb, closeMenuHandler, openSubMenu, openSub }) => {
  return (
    <ul className="header-nav__list">
      {navDb.map((item, index) => {
        const counter = index + 1;
        if (item.type === "services") {
          return (
            <HeaderNavServices
              openSubMenu={openSubMenu}
              openSub={openSub}
              key={index}
              item={item}
              counter={counter}
            />
          );
        } else if (item.type === "contacts") {
          return (
            <HeaderNavContacts
              key={index}
              item={item}
              closeMenuHandler={closeMenuHandler}
              counter={counter}
            />
          );
        } else {
          return <HeaderNavDefault key={index} item={item} counter={counter} />;
        }
      })}
    </ul>
  );
};

export default HeaderNav;
