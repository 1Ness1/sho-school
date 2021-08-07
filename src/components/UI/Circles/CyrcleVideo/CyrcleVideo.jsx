import React from "react";
// import PropTypes from 'prop-types';

import useLanguage from "../../../../Hooks/useLanguages";
import Triangle from "../../../../svg/triangle.svg";
import CyrcleVideoUa from "../../../../svg/circle/video_circle_ua.svg";
import CyrcleVideoRu from "../../../../svg/circle/video_circle_ru.svg";
const CyrcleVideo = () => {
  return (
    <div className="cyrcle__video">
      {useLanguage(
        <CyrcleVideoUa className="cyrcle__video-svg" />,
        <CyrcleVideoRu className="cyrcle__video-svg" />
      )}
      <span className="cyrcle__triangle">
        <Triangle />
      </span>
    </div>
  );
};

// CyrcleVideo.propTypes = {};

export default CyrcleVideo;
