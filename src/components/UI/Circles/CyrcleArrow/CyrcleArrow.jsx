import React from "react";
import PropTypes from "prop-types";

import Arrow from "../../../../svg/arrow.svg";
import YellowStar from "../../../../svg/yellow_star.svg";

const CyrcleArrow = ({ titleCyrcle }) => {
  if (titleCyrcle) {
    return (
      <div className="cyrcle__arrow-star">
        <button className="cyrcle__arrow-link">
          <span className="cyrcle__yellow-bg">
            <YellowStar className="cyrcle__yellow-star" />
            <Arrow className="cyrcle__arrow" />
          </span>
          <p className="cyrcle__arrow-title">{titleCyrcle}</p>
        </button>
      </div>
    );
  } else {
    return (
      <div className="cyrcle__arrow-star">
        <button className="cyrcle__arrow-link">
          <span className="cyrcle__yellow-bg">
            <YellowStar className="cyrcle__yellow-star" />
            <Arrow className="cyrcle__arrow" />
          </span>
        </button>
      </div>
    );
  }
};

CyrcleArrow.propTypes = {
  titleCyrcle: PropTypes.string,
};

export default CyrcleArrow;
