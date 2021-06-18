import React from "react";
// import PropTypes from 'prop-types';
import useLanguage from "../../../Hooks/useLanguages";
import BlockTitle from "../../UI/BlockTitle/BlockTitle";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CircleText from "../../UI/Circles/CyrcleText/CyrcleText";
const Instagram = () => {
  const instagram = useStaticQuery(graphql`
    query allInstaQuery {
      source: allFile(filter: { absolutePath: { regex: "/instagram/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 274
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `);

  const images = instagram.source.nodes;
  return (
    <section className="instagram">
      <div className="wrapper">
        <BlockTitle
          subTitle={useLanguage("instagram", "instagram")}
          title={useLanguage(
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
            titleCircle={useLanguage(
              "Перейти в профіль @yana.sho",
              "Перейти в профіль @yana.sho"
            )}
          />
        </div>
      </div>
    </section>
  );
};

// Instagram.propTypes = {};

export default Instagram;
