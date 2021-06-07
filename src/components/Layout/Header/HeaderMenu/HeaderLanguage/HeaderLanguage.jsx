import React from "react";
import useLanguages from "../../../../../Hooks/useLanguages";
import "./HeaderLanguage";

function HeaderLanguage({ headerData }) {
  const language = headerData.lang;
  console.log(headerData);
  return (
    <div className="header__lang">
      <button className="header__toggle">
        {useLanguages(language.lang_ru, language.lang_ua)}
      </button>
      {/* <button className="header__toggle">
        {useLanguages(language.lang_ua, language.lang_ru)}
      </button> */}
    </div>
  );
}

export default HeaderLanguage;
