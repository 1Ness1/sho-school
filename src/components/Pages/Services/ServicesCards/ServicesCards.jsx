import React from "react";
// import PropTypes from "prop-types";
import useLanguage from "../../../../Hooks/useLanguages";
import ServicesCard from "./ServicesCard/ServicesCard";
const ServicesCards = () => {
  return (
    <section className="cards">
      <div className="wrapper">
        <div className="card__container">
          <ServicesCard
            title={useLanguage("1 Місяць", "1 Месяц")}
            subTitle={useLanguage("Тариф лайт", "Тариф лайт")}
            price={useLanguage("2000", "2000")}
            quantity={useLanguage("8 занять", "8 занятий")}
            lesson={useLanguage("250 грн", "250 грн")}
            saving={useLanguage("0 грн", "0 грн")}
          />
          <ServicesCard
            title={useLanguage("1 Місяць", "1 Месяц")}
            subTitle={useLanguage("Тариф лайт", "Тариф лайт")}
            price={useLanguage("2000", "2000")}
            quantity={useLanguage("8 занять", "8 занятий")}
            lesson={useLanguage("250 грн", "250 грн")}
            saving={useLanguage("0 грн", "0 грн")}
          />
          <ServicesCard
            title={useLanguage("1 Місяць", "1 Месяц")}
            subTitle={useLanguage("Тариф лайт", "Тариф лайт")}
            price={useLanguage("2000", "2000")}
            quantity={useLanguage("8 занять", "8 занятий")}
            lesson={useLanguage("250 грн", "250 грн")}
            saving={useLanguage("0 грн", "0 грн")}
          />
        </div>
        {/* <div className="cards__container">
          <div className="cards__item">
            <div className="card__month">
              <p className="card__title">{title}</p>
              <p className="card__rate">{rate}</p>
            </div>
            <div className="card__content">
              <p className="card__price">{price}</p>
              <div className="card__count">
                <p>
                  <span className="card__count-title">
                    {useLanguage("Кількість", "Количество")}
                  </span>
                  <span className="card__count-content">{count}</span>
                </p>
                <p>
                  <span className="card__count-title">
                    {useLanguage("Кількість", "Количество")}
                  </span>
                  <span className="card__count-content">{countPrice}</span>
                </p>
              </div>
              <div className="card__saving">
                <span className="card__saving-title">
                  {useLanguage("Одне заняття:", "Одно занятие:")}
                </span>
                <span className="card__saving-content">{saving}</span>
              </div>
            </div>
            <div className="card__button">
              <CyrcleArrow titleCyrcle={titleCyrcle} />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// ServicesCard.propTypes = {
//   titleCyrcle: PropTypes.string,
//   title: PropTypes.string,
//   rate: PropTypes.string,
//   count: PropTypes.string,
//   saving: PropTypes.string,
// };

export default ServicesCards;
