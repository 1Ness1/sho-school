import React from "react";
import useLanguages from "../../../Hooks/useLanguages";
// import
// import PropTypes from 'prop-types';
import CircleText from "../Circles/CyrcleText/CyrcleText";

const FreeLesson = ({ title, container, showFreeModal }) => {
  return (
    <section className="free-lesson">
      <div className="wrapper">
        <div className={container}>
          <p className="free-lesson__title">{title}</p>
          <button className="free-lesson__btn" onClick={showFreeModal}>
            <CircleText
              titleCircle={useLanguages(
                "замовити безкоштовне заняття",
                "замовити безкоштовне заняття"
              )}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

// FreeLesson.propTypes = {};

export default FreeLesson;
