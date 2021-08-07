import React from "react";
// import PropTypes from 'prop-types';
import BlockTitle from "../../../UI/BlockTitle/BlockTitle";

const AboutMarkdown = ({ children, title, subTitle, sectionClass }) => {
  return (
    <section className={sectionClass}>
      <div className="wrapper">
        <BlockTitle title={title} subTitle={subTitle} />
        <div className="markdown-components">{children}</div>
      </div>
    </section>
  );
};

// AboutMarkdown.propTypes = {};

export default AboutMarkdown;
