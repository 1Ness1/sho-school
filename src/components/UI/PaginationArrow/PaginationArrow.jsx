import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ArrowLeft from "../../../svg/arrow-left.svg";
import ArrowRight from "../../../svg/arrow-right.svg";

const PaginationArrow = ({ textLeft, textRight }) => {
  return (
    <div className="pagination-arrow">
      <div className="wrapper">
        <div className="pagination-arrow__container">
          <div className="pagination__arrow pagination__arrow--left">
            <Link className="pagination__link pagination__link--left" to="/">
              <div className="pagination__arrow">
                <ArrowLeft />
              </div>

              <span className="arrow-left">{textLeft}</span>
            </Link>
          </div>
          <div className="pagination__arrow pagination__arrow--right">
            <Link className="pagination__link pagination__link--right" to="/">
              <div className="pagination__arrow pagination__arrow--reverse">
                <ArrowRight />
              </div>

              <span className="arrow-right">{textRight}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PaginationArrow.propTypes = {
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
};

export default PaginationArrow;
