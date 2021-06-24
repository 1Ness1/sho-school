import React, { useState } from "react";
// import PropTypes from "prop-types";
import { dataAccordion } from "../../../../db/dataAccordion";
import BlockTitle from "../../../UI/BlockTitle/BlockTitle";
import useLanguage from "../../../../Hooks/useLanguages";
const ServicesAccordion = () => {
  const [active, setActive] = useState(0);
  console.log(active);
  const langToggle = useLanguage;
  return (
    <section className="accordion">
      <div className="wrapper">
        <BlockTitle
          title={useLanguage(
            "Відповіді на ваші запитання",
            "Ответы на ваши вопросы"
          )}
          subTitle={"FAQ"}
        />
        <ul className="accordion__list">
          {dataAccordion.map((item, index) => {
            return (
              <li className="accordion__item" key={item.id}>
                <button
                  id={index}
                  className="accordion__button"
                  onClick={() =>
                    active === item.id ? setActive(0) : setActive(item.id)
                  }
                >
                  <div className="accordion__item-heading">
                    <span className="accordion__count">
                      {"0" + item.id + "."}
                    </span>
                    <p className="accordion__title">
                      {langToggle(item.title_ua, item.title_ru)}
                    </p>
                    <div
                      className={
                        active === item.id
                          ? "accordion__icon accordion__icon--active"
                          : "accordion__icon"
                      }
                    >
                      <span className="accordion__icon-line accordion__icon-line-1"></span>
                      <span className="accordion__icon-line accordion__icon-line-2"></span>
                    </div>
                  </div>
                  <div className="accordion__overflow">
                    <div
                      className={
                        active === item.id
                          ? "accordion__wrapper accordion__wrapper--active"
                          : "accordion__wrapper"
                      }
                    >
                      <p className="accordion__description">
                        {langToggle(item.description_ua, item.description_ru)}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

// ServicesAccordion.propTypes = {};

export default ServicesAccordion;
