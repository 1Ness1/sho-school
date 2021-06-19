import React from "react";
// import useLanguages from "../../../Hooks/useLanguages";

import Networks from "../Networks/Networks";
import CircleBackground from "../Circles/СircleBackground/CircleBackground";

import CyrcleArrow from "../Circles/CyrcleArrow/CyrcleArrow";
// import CyrcleBg from "../../../../svg/circle/cyrcle_bg.svg";

// import PropTypes from 'prop-types';

const MainTitle = ({ titleFirst, titleSecond, titleThird, titleArrow }) => {
  return (
    <section className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          <span className="home__title-text">{titleFirst}</span>
          <span className="home__title-text">{titleSecond}</span>
          <span className="home__title-text">{titleThird}</span>
        </h1>
        <div className="home__title-buttons">
          <div className="home__button-start">
            <CyrcleArrow titleCyrcle={titleArrow} />
          </div>

          <div className="home__button-networks">
            <Networks title={"title"} />
          </div>
        </div>
        <CircleBackground className="home__svg" />
      </div>
    </section>
  );
};

// HomeTitle.propTypes = {};

export default MainTitle;
