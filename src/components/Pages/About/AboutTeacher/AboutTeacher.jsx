import React from "react";
// import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import { StaticImage } from "gatsby-plugin-image";

const AboutTeacher = ({ title, subTitle }) => {
  const { t } = useTranslation();
  return (
    <section className="teacher">
      <div className="wrapper">
        <BlockTitle title={title} subTitle={subTitle} />
        <div className="teacher__content">
          <StaticImage
            className="teacher__photo"
            src="../../../../images/yana.jpg"
            alt="Основатель"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="teacher__about">
            <span className="teacher__marker">засновник</span>
            <h3 className="teacher__title">
              Я Яна, і це я проводжу пробні уроки
            </h3>
            <p className="teacher__markdown">
              Я педагог філолог, і вже в студентства пробувала навчати
              англійської по-своєму: придумала волонтерський проект HUMANities і
              зарядила однокурсників навчати інгліш без книжок.
            </p>
            <p className="teacher__markdown">
              Мені було цікаво, що з цього вийде, і тоді моєї величезної мрією
              було зробити щось подібне вже для себе, як бізнесу.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// AboutTeacher.propTypes = {};

export default AboutTeacher;
