import React from 'react';
import triangleLogo from '../assets/triangle-logo.svg';
import coasterLogo from '../assets/coaster-logo.svg';
import hunterLogo from '../assets/hunter-logo.svg';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LandingWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
`;

const TriangleLogo = styled.img`
  height: 70%;
  position: relative;
  z-index: 0;
  animation: bounceIn 5s;
  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    30% {
      transform: scale(1.6);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CoasterLogo = styled.img`
  position: absolute;
  width: 80%;
  z-index: 1;
  padding-top: 20px;
  animation: fadeInUp 4s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const HunterLogo = styled.img`
  position: absolute;
  width: 60%;
  z-index: 1;
  padding-top: 100px;
  animation: fadeInDown 4s;
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Button = styled(Link)`
  position: absolute;
  z-index: 2;
  width: 60%;
  height: 40%;
`;

export default function Landing() {
  return (
    <LandingWrapper>
      <CoasterLogo src={coasterLogo} />
      <HunterLogo src={hunterLogo} />
      <TriangleLogo src={triangleLogo} />
      <Button to="/"></Button>
    </LandingWrapper>
  );
}
