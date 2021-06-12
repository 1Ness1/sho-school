import React from "react";
import { dataContacts } from "../../../db/dataContacts";
import YellowStart from "../../../svg/yellow_star.svg";

const Networks = ({ title }) => {
  const networksData = dataContacts.networks;
  if (title) {
    return (
      <div className="networks">
        {networksData.map((item) => (
          <a key={item.id} href={item.link} className="networks__link">
            <span className="networks__icon">
              <YellowStart />
              <span className="networks__icon-inner">
                <img src={item.src} alt="text" />
              </span>
            </span>
            <p className="networks__title">{item.name}</p>
          </a>
        ))}
      </div>
    );
  } else {
    return (
      <div className="networks">
        {networksData.map((item) => (
          <a key={item.id} href={item.link} className="networks__link">
            <span className="networks__icon">
              <YellowStart />
              <span className="networks__icon-inner">
                <img src={item.src} alt="text" />
              </span>
            </span>
          </a>
        ))}
      </div>
    );
  }
};

export default Networks;
