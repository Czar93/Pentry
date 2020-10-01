import React from "react";
import styled from "styled-components";
import wallpaper from "../../assets/wallpaper.jpg";
import DarkerBackground from "../wrappers/DarkerBackground";
import HeaderButton from "../buttons/HeaderButton";
import Paragraph from "../text/Paragraph";

const StyledMainPage = styled.div`
  width: 100%;
  background-image: url(${wallpaper});
  background-size: cover;
  background-position-y: 50%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: min-content;
  min-width: 300px;
  padding: 20px;
  z-index: 2;
`;

const Main = () => {
  return (
    <StyledMainPage>
      <DarkerBackground />
      <StyledHeader>
        <Paragraph small white>
          Simply manage your kitchen resources
        </Paragraph>
        <HeaderButton>Let's go</HeaderButton>
      </StyledHeader>
    </StyledMainPage>
  );
};

export default Main;
