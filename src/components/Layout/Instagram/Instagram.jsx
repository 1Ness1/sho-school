import React from "react";
// import PropTypes from 'prop-types';
import useLanguage from "../../../Hooks/useLanguages";
import BlockTitle from "../../UI/BlockTitle/BlockTitle";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CircleText from "../../UI/Circles/CyrcleText/CyrcleText";
const Instagram = ({ tapLink }) => {
  const instagram = useStaticQuery(graphql`
    query allInstaQuery {
      source: allFile(filter: { absolutePath: { regex: "/instagram/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `);
  const langToggle = useLanguage;
  const images = instagram.source.nodes;
  if (!tapLink) {
    return (
      <section className="instagram">
        <div className="wrapper">
          <BlockTitle
            subTitle={langToggle("instagram", "instagram")}
            title={langToggle(
              "більше в моєму Instagram",
              "больше в моем Instagram"
            )}
          />

          <div className="instagram__content">
            <div className="instagram__images">
              {images.map((item, index) => {
                const image = getImage(item);
                return (
                  <GatsbyImage
                    className="instagram__image-item"
                    image={image}
                    key={index}
                    alt="alt"
                  />
                );
              })}
            </div>
            <CircleText
              titleCircle={langToggle(
                "Перейти в профіль @yana.sho",
                "Перейти в профіль @yana.sho"
              )}
            />
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

// Instagram.propTypes = {};

export default Instagram;
