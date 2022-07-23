import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Chears from "../Logo/chears";
import TitleBtn from "../TitleButton";
import AddressBadge from "../AddressBadge";
import { MainPageText } from "../../assets/const/preferencies";
import {
  ButtonContainer,
  Container,
  ContentContainer,
  TextContent,
} from "./components";

const TitleSidebar = () => {
  return (
    <Container>
      <ContentContainer>
        <Logo />
        <TextContent>{MainPageText}</TextContent>
        <ButtonContainer>
          <TitleBtn text={"delivery"} />
          <TitleBtn text={"reserve"} />
        </ButtonContainer>
        <Chears />
      </ContentContainer>
      <AddressBadge />
    </Container>
  );
};

export default TitleSidebar;
