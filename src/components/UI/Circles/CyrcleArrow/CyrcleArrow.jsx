import React from "react";
import PropTypes from "prop-types";

import Arrow from "../../../../svg/arrow.svg";
import YellowStar from "../../../../svg/yellow_star.svg";

const CyrcleArrow = ({ title }) => {
  if (title) {
    return (
      <div className="cyrcle__arrow-star">
        <button className="cyrcle__arrow-link">
          <YellowStar />
          <Arrow className="cyrcle__arrow" />
        </button>
        <p className="cyrcle__arrow-title">{title}</p>
      </div>
    );
  } else {
    return (
      <div className="cyrcle__arrow-star">
        <button className="cyrcle__arrow-link">
          <YellowStar />
          <Arrow className="cyrcle__arrow" />
        </button>
      </div>
    );
  }
};

CyrcleArrow.propTypes = {
  title: PropTypes.string,
};

export default CyrcleArrow;
