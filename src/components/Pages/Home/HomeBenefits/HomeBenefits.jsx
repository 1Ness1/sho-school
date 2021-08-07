import React from "react";
import { dataBenefits } from "../../../../db/dataBenefits";
import useLanguages from "../../../../Hooks/useLanguages";

import DarkStar from "../../../../svg/black_star.svg";
// import PropTypes from 'prop-types';

const HomeBenefits = () => {
  const langToggle = useLanguages;
  return (
    <section className="benefits">
      <div className="wrapper">
        <ul className="benefits__list">
          {dataBenefits.map((item) => {
            return (
              <li className="benefits__item" key={item.id}>
                <DarkStar className="benefits__star" />
                <p className="benefits__title">
                  {langToggle(item.title_ua, item.title_ru)}
                </p>
                <p className="benefits__description">
                  {langToggle(item.description_ua, item.description_ru)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

// HomeBenefits.propTypes = {};

export default HomeBenefits;
