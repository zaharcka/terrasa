import styled from "styled-components";

export const Container = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-left: 45px;
  padding-right: 45px;
`;

export const TextContent = styled.p`
  font-family: "Roboto";
  line-height: 34px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  margin-bottom: 200px;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: left;
  }
`;
