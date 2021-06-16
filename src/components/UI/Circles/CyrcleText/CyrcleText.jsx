import React from "react";
// import PropTypes from 'prop-types';
import YellowCircle from "../../../../svg/yellow_star.svg";
const CyrcleText = ({ titleCircle }) => {
  return (
    <button className="circle-text">
      <span className="circle-container">
        <YellowCircle className="circle-text__svg" />
        <span className="circle-text__title">{titleCircle}</span>
      </span>
    </button>
  );
};

// CyrcleText.propTypes = {};

export default CyrcleText;
