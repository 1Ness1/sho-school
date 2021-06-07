import React from "react";

const HeaderBurger = ({ burgerClickHandler, active }) => {
  return (
    <button
      onClick={burgerClickHandler}
      className={
        active ? "header__burger header__burger-is-open" : "header__burger"
      }
    >
      <span className="header__burger-line line-1"></span>
      <span className="header__burger-line line-2"></span>
    </button>
  );
};

export default HeaderBurger;
