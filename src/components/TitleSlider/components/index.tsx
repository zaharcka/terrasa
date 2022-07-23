import styled from "styled-components";

export const Container = styled.div`
  width: 56%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

export const SliceContainer = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const SliceTextContainer = styled.div<{ image: string }>`
  height: 100px;
  width: 50%;
  background-color: transparent;
  padding: 20px;
  padding-left: 30px;
  backdrop-filter: blur(3px);
`;

export const SliceTitle = styled.h3`
  color: white;
  margin-bottom: 0px;
`;

export const SliceDecription = styled.p`
  color: white;
`;
