import React from "react";
import CyrcleArrow from "../../../../UI/Circles/CyrcleArrow/CyrcleArrow";
import useLanguage from "../../../../../Hooks/useLanguages";
// import PropTypes from 'prop-types';

const ServicesCard = ({
  title,
  subTitle,
  price,
  quantity,
  lesson,
  saving,
  showModalOrder,
}) => {
  return (
    <div className="cards__item">
      <div className="card__header">
        <p className="card__title">{title}</p>
        <span className="card__subTitle">{subTitle}</span>
      </div>
      <div className="card__content">
        <div className="card__price">
          <span className="card__price-title">
            {price}
            <span className="card__price-currency">грн</span>
          </span>
        </div>
        <div className="card__main">
          <p className="card__count-container card__count-container--quantity">
            <span className="card__marker">
              {useLanguage("Кількість:", "Количество:")}
            </span>
            <span className="card__marker-code">{quantity}</span>
          </p>
          <p className="card__count-container card__count-container--lesson">
            <span className="card__marker">
              {useLanguage("Одне заняття:", "Одно занятие:")}
            </span>
            <span className="card__marker-code">{lesson}</span>
          </p>
          <p className="card__count-container card__count-container--saving">
            <span className="card__marker">
              {useLanguage("Єкономія:", "Экономия")}
            </span>
            <span className="card__marker-code">{saving}</span>
          </p>
        </div>
        <div className="card__button">
          <button onClick={showModalOrder}>
            <CyrcleArrow
              titleCyrcle={useLanguage("замовити пакет", "заказать пакет")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

// ServicesCard.propTypes = {};

export default ServicesCard;
