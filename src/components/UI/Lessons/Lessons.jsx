import React from "react";
import useLang from "../../../Hooks/useLanguages";
import { dataLessons } from "../../../db/dataLessons";
import CyrcleArrow from "../../UI/Circles/CyrcleArrow/CyrcleArrow";
// import PropTypes from 'prop-types';
import Arrow from "../../../svg/arrow.svg";

const Lessons = () => {
  const langToggle = useLang;
  // const subTitle = dataLessons.lang
  // const count = id++
  return (
    <section className="lessons">
      <div className="lessons__wrapper">
        {dataLessons.lang.map((item, index) => {
          return (
            <a className="lessons__link" href="/" key={item.id}>
              <div className="lessons__count">
                <span>{"0" + ++index + "."}</span>
              </div>
              <div className="lessons__content">
                <p className="lessons__title">
                  {langToggle(dataLessons.title_ua, dataLessons.title_ru)}
                </p>
                <span className="lessons__subTitle">
                  <span className="lessons__subTitle-text">
                    {langToggle(item.subTitle_ua, item.subTitle_ru)}
                  </span>
                  <span className="lessons__subTitle-arrow">
                    <Arrow />
                  </span>
                </span>
              </div>
              <CyrcleArrow />
            </a>
          );
        })}
      </div>
    </section>
  );
};

// Lessons.propTypes = {};

export default Lessons;
