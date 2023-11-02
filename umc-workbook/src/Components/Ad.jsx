import React from 'react';
import ad from "../assets/images/ad.svg"

// showAd props 받아와서 광고 출력
// props가 false면 광고 숨기기
const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <img src={ad} alt="ad" style={{width: "100%"}}/>
  );
};

export default Ad;
