import React from "react";
import QuoteSvg from "../../../svg/quote.svg";
// import PropTypes from 'prop-types';

const Quote = ({ quote, sectionClass }) => {
  return (
    <section className={"quote" + sectionClass}>
      <div className="wrapper">
        <div className="quote__inner">
          <QuoteSvg className="quote__svg" />
          <p className="quote__text">{quote}</p>
        </div>
      </div>
    </section>
  );
};

// Quote.propTypes = {};

export default Quote;
