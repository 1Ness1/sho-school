import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import CyrcleVideo from "../Circles/CyrcleVideo/CyrcleVideo";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { dataImages } from "../../../db/dataImages";
// import PropTypes from 'prop-types';

const Video = () => {
  // const image = getImage(dataImages);

  // const pageQuery = graphql`
  //   query {
  //     id
  //     videoCover {
  //       childImageSharp {
  //         gatsbyImageData(width: 1920, placeholder: blurred, formats: [auto])
  //       }
  //     }
  //   }
  // `;
  return (
    <section className="video">
      <a className="video__link" href="/">
        <StaticImage
          src="../../../images/video_cover.jpg"
          alt="video cover"
          placeholder="blurred"
          layout="fullWidth"
        />
        <CyrcleVideo />
        {/* <GatsbyImage image={image} alt="alt" /> */}
      </a>
    </section>
  );
};

// Video.propTypes = {};

export default Video;
