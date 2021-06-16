import React from "react";
// import PropTypes from 'prop-types';
import useLanguage from "../../../Hooks/useLanguages";
import { StaticImage } from "gatsby-plugin-image";
import BlockTitle from "../../UI/BlockTitle/BlockTitle";
import { dataImages } from "../../../db/dataImages";
import CircleText from "../../UI/Circles/CyrcleText/CyrcleText";
const Instagram = () => {
  console.log(dataImages.instagram);
  // const images = dataImages.instagram;
  return (
    <section className="instagram">
      <div className="instagram__wrapper">
        <BlockTitle
          subTitle={useLanguage("instagram", "instagram")}
          title={useLanguage(
            "більше в моєму Instagram",
            "больше в моем Instagram"
          )}
        />

        <div className="instagram__content">
          {/* {images.map((item) => {
            return (
              <StaticImage
                key={item.id}
                src={item.image}
                alt="video cover"
                placeholder="blurred"
                width={1920}
              />
            );
          })} */}
          <div className="instagram__images">
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-1.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-2.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-3.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-4.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-5.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-6.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-7.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
            <StaticImage
              className="instagram__image"
              src="../../../images/instagram-8.jpg"
              alt="image"
              placeholder="blurred"
              width={274}
            />
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
