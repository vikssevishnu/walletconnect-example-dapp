import * as React from "react";
import styled from "styled-components";
import banner from "../assets/iViewBanner.png";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SBanner = styled.div`
  width: 700px;
  height: 100px;
  background: url(${banner}) no-repeat;
  //background-size: auto;
  //background-position: center;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
  </SBannerWrapper>
);

export default Banner;
