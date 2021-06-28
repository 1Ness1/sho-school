import React, { useState } from "react";
import MainTitle from "../../../UI/MainTitle/MainTitle";
import useLanguage from "../../../../Hooks/useLanguages";
import { dataBlog } from "../../../../db/dataBlog";
// import PropTypes from '??prop-types';

const BlogFilter = () => {
  const langToggle = useLanguage;
  const [activeType, setActiveType] = useState(1);
  const [types, setTypes] = useState(false);
  const [articles, setArticles] = useState(blogType);
  const blogType = dataBlog.type;
  console.log(activeType);
  return (
    <section className="filter">
      <div className="wrapper">
        <MainTitle
          sectionName={"filter__title"}
          titleFirst={useLanguage("Поради та", "Советы и")}
          titleSecond={useLanguage("статті", "статьи")}
        />
        <div
          className={
            types === true
              ? "filter__overflow filter__overflow--active"
              : "filter__overflow"
          }
        >
          <button onClick={() => setTypes(!types)} className="filter__acordion">
            {useLanguage("Фільтр Статей", "Фильтр статей")}
          </button>
          <div className="filter__wrapper">
            <ul
              className={
                types === true
                  ? "filter__list filter__list--active"
                  : "filter__list"
              }
            >
              {blogType.map((item, index) => {
                return (
                  <li className="filter__item" key={item.id}>
                    <button
                      className={
                        activeType === item.id
                          ? "filter__btn filter__btn--active"
                          : "filter__btn"
                      }
                      id={index}
                      onClick={() =>
                        activeType === item.id
                          ? setActiveType(0)
                          : setActiveType(item.id)
                      }
                      // onClick={(e) => {
                      //   return it.blogFilter.type.indexOf(e.target.type) > -1;
                      // }}
                    >
                      {item.title_ua}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// BlogFilter.propTypes = {};

export default BlogFilter;
