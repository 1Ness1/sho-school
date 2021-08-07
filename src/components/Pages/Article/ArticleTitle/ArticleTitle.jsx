import React from "react";
// import PropTypes from 'prop-types';
const ArticleTitle = ({ children, title, subTitle, date }) => {
  return (
    <div className="article__header">
      <div className="wrapper">
        <div className="article__filter">{children}</div>
        <h1 className="article__title">{title}</h1>
        <p className="article__subtitle">
          <span>{subTitle}</span>
          <span className="article__slash"> /</span>
          <span className="article__date">{date}</span>
        </p>
      </div>
    </div>
  );
};

// ArticleTitle.propTypes = {};

export default ArticleTitle;
