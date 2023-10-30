import React from 'react';
import ad from "../assets/images/ad.svg"

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <img src={ad} alt="ad" style={{width: "100%"}}/>
  );
};

export default Ad;
