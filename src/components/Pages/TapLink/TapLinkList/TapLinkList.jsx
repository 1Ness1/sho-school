import React from "react";
import CircleArrow from "../../../UI/Circles/CyrcleArrow/CyrcleArrow";
import { dataTapLink } from "../../../../db/dataTapLink";
import { Link } from "gatsby-plugin-react-i18next";
import useLanguage from "../../../../Hooks/useLanguages";
// import PropTypes from 'prop-types';

const TapLinkList = () => {
  const langToggle = useLanguage;
  return (
    <section className="tap-link">
      <ul className="tap-link__list">
        {dataTapLink.map((item) => {
          if (item.type === "a") {
            return (
              <li className="tap-link__item" key={item.id}>
                <Link className="tap-link__container" to={item.link} alt="link">
                  <span className="tap-link__count">{"0" + item.id + "."}</span>
                  <p className="tap-link__link">
                    <span className="tap-link__link-container">
                      {langToggle(item.title_ua, item.title_ru)}
                    </span>
                  </p>
                  <CircleArrow />
                </Link>
              </li>
            );
          } else {
            return (
              <li className="tap-link__item" key={item.id}>
                <a className="tap-link__container" href={item.link} alt="link">
                  <span className="tap-link__count">{"0" + item.id + "."}</span>
                  <p className="tap-link__link">
                    <span className="tap-link__link-container">
                      {langToggle(item.title_ua, item.title_ru)}
                    </span>
                  </p>
                  <CircleArrow />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

// TapLinkList.propTypes = {};

export default TapLinkList;
