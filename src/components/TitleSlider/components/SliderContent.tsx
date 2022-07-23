import React from "react";
import styled from "styled-components";

const SliderContent = styled.div<{
  coordinates: number;
  numberOfPictures: number;
}>`
  height: 100%;
  transform: translateX(
    -${(props) => (props.coordinates * 100) / props.numberOfPictures}%
  );
  transition: transform ease-out 0.5s;
  display: flex;
  width: ${(props) => props.numberOfPictures * 100}%;
`;

export default SliderContent;
