import React from "react";
import useLanguages from "../../../../Hooks/useLanguages";

import Networks from "../../../UI/Networks/Networks";
import CyrcleArrow from "../../../UI/Circles/CyrcleArrow/CyrcleArrow";
import CyrcleBg from "../../../../svg/circle/cyrcle_bg.svg";
// import PropTypes from 'prop-types';

const HomeTitle = () => {
  return (
    <section className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          <span className="home__title-text">
            {useLanguages("Онлайн школа", "Онлайн школа")}
          </span>
          <span className="home__title-text">
            {useLanguages("Іноземних", "Иностранных")}
          </span>
          <span className="home__title-text">
            {useLanguages("Мов", "Языков")}
          </span>
        </h1>
        <div className="home__title-buttons">
          <div className="home__button-start">
            <CyrcleArrow />
          </div>

          <div className="home__button-networks">
            <Networks />
          </div>
        </div>
      </div>
      <CyrcleBg className="home__svg" />
    </section>
  );
};

// HomeTitle.propTypes = {};

export default HomeTitle;
