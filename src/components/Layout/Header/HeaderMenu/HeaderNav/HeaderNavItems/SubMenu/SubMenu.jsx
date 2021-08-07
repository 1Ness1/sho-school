import React from "react";
import "./SubMenu";
import { Link } from "gatsby-plugin-react-i18next";
import useLanguages from "../../../../../../../Hooks/useLanguages";
import YellowStar from "../../../../../../../svg/yellow_star.svg";
import Arrow from "../../../../../../../svg/arrow.svg";

const SubMenu = ({ subMenu, openSub }) => {
  const langToggle = useLanguages;
  return (
    <ul className={!openSub ? "submenu" : "submenu submenu--is-open"}>
      {subMenu.map((item, index) => {
        const counter = ++index;
        return (
          <li className="submenu__item" key={index}>
            <Link className="submenu__link" to={item.link}>
              <span className="submenu__title">
                {/* <span className="submenu__title-prefix">
                  {langToggle(item.title_ua, item.title_ru)}
                </span> */}
                {langToggle(item.title_ua, item.title_ru)}
              </span>
              <div className="submenu__inner">
                <span className="submenu__counter">
                  {counter <= 9 ? "0" + counter + "." : counter + "."}
                </span>
                <span className="submenu__icon">
                  <YellowStar />
                  <Arrow />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
