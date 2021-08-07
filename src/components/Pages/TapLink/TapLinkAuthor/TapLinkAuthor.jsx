import React from "react";
// import PropTypes from 'prop-types';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-i18next";

import CircleAuthor from "../../../../svg/circle/author.svg";

const TapLinkAuthor = () => {
  return (
    <div className="author">
      <Link to={"/about/"}>
        <span className="author__container">
          <CircleAuthor />
          <span className="author__img">
            <StaticImage
              className="teacher__photo"
              src="../../../../images/yana.jpg"
              alt="Основатель"
              placeholder="blurred"
              layout="fullWidth"
            />
          </span>
        </span>
      </Link>
    </div>
  );
};

// TapLinkAuthor.propTypes = {};

export default TapLinkAuthor;
