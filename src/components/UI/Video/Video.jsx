import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { dataImages } from "../../../db/dataImages";
// import PropTypes from 'prop-types';

const Video = ({}) => {
  // const image = getImage(dataImages.static.videoCover);

  // const pageQuery = graphql`
  //   query hess {
  //     static(id: { eq: $Id }) {
  //       videoCover {
  //         childImageSharp {
  //           gatsbyImageData(width: 1920, placeholder: blurred, formats: [auto])
  //         }
  //       }
  //     }
  //   }
  // `;
  return (
    <section className="video">
      {/* <StaticImage
        src="../../../images/video_cover.jpg"
        alt="video cover"
        placeholder="blurred"
        width={1920}
      /> */}
      {/* <GatsbyImage image={image} alt="alt" /> */}
    </section>
  );
};

// Video.propTypes = {};

export default Video;
