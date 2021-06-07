import React from "react";

import "./HeaderLanguage";

function HeaderLanguage({ headerDb }) {
  return (
    <div className="header__lang">
      <button className="header__toggle">{headerDb.lang.lang_ua}</button>
      <button className="header__toggle">{headerDb.lang.lang_ru}</button>
    </div>
  );
}

export default HeaderLanguage;
