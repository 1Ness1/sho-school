import React from "react";
import { Link } from "gatsby";
import useLanguage from "../../../Hooks/useLanguages";
import PropTypes from "prop-types";

const Crumbs = ({ crumbs }) => {
  const langToggle = useLanguage;

  return (
    <div className="crumbs">
      <div className="wrapper">
        <div className="crumbs__container">
          <ul className="crumbs__list">
            {crumbs.map((item) => {
              return (
                <li className="crumbs__item" key={item.id}>
                  <Link className="crumbs__link" to={item.link}>
                    {langToggle(item.title_ua, item.title_ru)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

Crumbs.propTypes = {
  crumbs: PropTypes.array,
};

export default Crumbs;
