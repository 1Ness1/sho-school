import React from "react";
import PropTypes from "prop-types";

const BlockTitle = ({ subTitle, title }) => {
  return (
    <div className="block__title-content">
      <span className="block__marker">{subTitle}</span>
      <h3 className="block__title">{title}</h3>
    </div>
  );
};

BlockTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default BlockTitle;
