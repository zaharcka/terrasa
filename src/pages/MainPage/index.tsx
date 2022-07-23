import React from "react";
import TitleSidebar from "../../components/TitleSidebar";
import TitleSlider from "../../components/TitleSlider";
import Menu from "../../components/RightSidebarMenu";
import { Container } from "./components";

const MainPage = () => {
  return (
    <Container>
      <TitleSidebar />
      <TitleSlider />
      <Menu />
    </Container>
  );
};

export default MainPage;
