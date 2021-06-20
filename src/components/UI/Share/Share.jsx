import React from "react";
// import PropTypes from "prop-types";
import { dataContacts } from "../../../db/dataContacts";
import useLanguage from "../../../Hooks/useLanguages";

const Share = () => {
  return (
    <div className="share">
      <div className="wrapper">
        <div className="share__container">
          <span className="share__title">
            {useLanguage("Поділитися:", "Поделиться:")}
          </span>
          <ul className="share__list">
            {dataContacts.networks.map((item) => {
              return (
                <li className="share__item" key={item.id}>
                  <a className="share__link" href={item.link}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Share.propTypes = {};

export default Share;
