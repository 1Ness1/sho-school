import React from "react";
import useLanguages from "../../../../Hooks/useLanguages";
import CircleUa from "../../../../svg/circle/about_cyrcle_ua.svg";
import CircleRu from "../../../../svg/circle/about_cyrcle_ru.svg";
import Heart from "../../../../svg/heart.svg";
// import PropTypes from 'prop-types';

const CyrcleHeart = () => {
  return (
    <div className="cyrcle-heart">
      <button className="cyrcle-heart__button">
        <span className="cyrcle-heart__wrapper">
          {useLanguages(
            <CircleUa className="cyrcle-heart__svg" />,
            <CircleRu className="cyrcle-heart__svg" />
          )}
          <span className="cyrcle-heart__inner">
            <Heart className="cyrcle-heart__heart" />
          </span>
        </span>
      </button>
    </div>
  );
};

// CyrcleHeart.propTypes = {};

export default CyrcleHeart;
