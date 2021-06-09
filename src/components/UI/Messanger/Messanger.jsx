import React from "react";
import { dataContacts } from "../../../db/dataContacts";
import YellowStart from "../../../svg/yellow_star.svg";
// import PropTypes from "prop-types";

const Messanger = ({ title }) => {
  const messangersData = dataContacts.messangers;
  if (title) {
    return (
      <div className="messanger">
        {messangersData.map((item) => (
          <a className="messanger__link" key={item.id} href={item.link}>
            <span className="messanger__icon">
              <YellowStart />
              <span
                className={
                  "messanger__icon-inner messanger__icon-inner--" + item.name
                }
              >
                <img src={item.src} alt="text" />
              </span>
            </span>
            <p className="message__title">{title}</p>
          </a>
        ))}
      </div>
    );
  } else {
    return (
      <div className="messanger">
        {messangersData.map((item) => (
          <a className="messanger__link" key={item.id} href={item.link}>
            <span className="messanger__icon">
              <YellowStart />
              <span
                className={
                  "messanger__icon-inner messanger__icon-inner--" + item.name
                }
              >
                <img src={item.src} alt="text" />
              </span>
            </span>
          </a>
        ))}
      </div>
    );
  }
};

// Messenger.propTypes = {};

export default Messanger;
