import React from "react";
import CircleArrow from "../../Circles/CyrcleArrow/CyrcleArrow";
// import PropTypes from 'prop-types';

const ModalOrder = ({ modalOrder, showModalOrder }) => {
  return (
    <section className={modalOrder === true ? "modal modal--show" : "modal"}>
      <div
        className={
          modalOrder ? "modal__wrapper modal__wrapper--show" : "modal__wrapper"
        }
      >
        <div className="modal__block modal__block--order">
          <button className="modal__leave-button" onClick={showModalOrder}>
            <span className="modal__line modal__line--1"></span>
            <span className="modal__line modal__line--2"></span>
          </button>
          <div className="modal__heading modal__heading--order">
            <div className="modal__heading-title">
              <span className="modal__heading-marker">Онлайн уроки</span>
              <p className="modal__heading-lesson">Англійської мови</p>
            </div>
            <div className="modal__heading-rate">
              <span className="modal__heading-marker modal__heading-marker--rate">
                Тариф Преміум
              </span>
              <p className="modal__heading-date">4 Місяці / 7360 грн</p>
            </div>
          </div>
          <form action="post" className="modal__form modal__form--order">
            <div className="modal__block-input modal__block-input--name modal__block-input--order">
              <label className="modal__label" htmlFor="name">
                <span className="modal__label-marker">ім'я:</span>
                <input
                  className="modal__input"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ваше ім'я"
                />
              </label>
            </div>
            <div className="modal__block-input modal__block-input--tel modal__block-input--order">
              <label className="modal__label">
                <span className="modal__label-marker">телефон:</span>
                <input className="modal__input" type="tel" />
              </label>
            </div>
            <div className="modal__block-input modal__block-input--email modal__block-input--order">
              <label className="modal__label" htmlFor="email">
                <span className="modal__label-marker">e-mail:</span>
              </label>
              <input
                className="modal__input"
                id="email"
                type="email"
                name="email"
                placeholder="Ваша пошта"
              />
            </div>
            <div className="modal__block-input modal__block-input--textarea modal__block-input--order">
              <label className="modal__label" htmlFor="comment">
                <span className="modal__label-marker">коментар:</span>
              </label>
              <textarea
                className="modal__input modal__input--textarea"
                id="comment"
                name="comment"
                resize="both"
                placeholder="Ваш коментар"
                rows={1}
              />
            </div>
            <div className="modal__footer">
              <p className="modal__footer-title">
                Натискаючи на кнопку, ви даєте згоду на обробку
                <a className="modal__footer-link" href="/">
                  персональних даних
                </a>
              </p>
              <button className="modal__button" type="submit">
                <CircleArrow titleCyrcle={"замовити урок"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// ModalOrder.propTypes = {};

export default ModalOrder;
