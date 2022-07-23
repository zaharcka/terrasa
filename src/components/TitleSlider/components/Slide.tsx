import React from "react";
import {
  SliceContainer,
  SliceDecription,
  SliceTextContainer,
  SliceTitle,
} from "./index";

const Slide = ({
  image,
  key,
  onCLick,
  text,
  title,
}: {
  image: string;
  key: string | number;
  onCLick?: () => void;
  text?: string;
  title?: string;
}) => {
  return (
    <SliceContainer key={key} onClick={onCLick} image={image}>
      <SliceTextContainer image={image}>
        <SliceTitle>«{title}»</SliceTitle>
        <SliceDecription>{text}</SliceDecription>
      </SliceTextContainer>
    </SliceContainer>
  );
};

export default Slide;
