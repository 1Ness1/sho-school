import React from "react";
// import PropTypes from 'prop-types';

// ? &#183; точка в центре
// ? \u00B7 JavaScript
const TapeLine = ({ text }) => {
  return (
    <section className="tape">
      <div className="tape__line tape__line--stroke">
        <span className="tape__text tape__text--stroke">{text}</span>
      </div>
      <div className="tape__line tape__line--fill">
        <span className="tape__text tape__text--fill">{text}</span>
      </div>
    </section>
  );
};

// TapeLine.propTypes = {};

export default TapeLine;
