import React from "react";
import useLanguages from "../../../../Hooks/useLanguages";
import Arrow from "../../../../svg/arrow.svg";
import CircleUa from "../../../../svg/circle/footer_circle_ua.svg";
import CircleRu from "../../../../svg/circle/footer_circle_ru.svg";
// import PropTypes from 'prop-types';

const CyrcleFooter = () => {
  return (
    <div className="up">
      <button className="up__button">
        <span className="up__cyrcle-wrapper">
          {useLanguages(
            <CircleUa className="up__cyrcle-svg" />,
            <CircleRu className="up__cyrcle-svg" />
          )}
          <span className="up__cyrcle-inner">
            <Arrow className="up__cyrcle-arrow" />
          </span>
        </span>
      </button>
    </div>
  );
};

// CyrcleFooter.propTypes = {};

export default CyrcleFooter;
