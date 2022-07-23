import React, { useState } from "react";
import SliderArrows from "./SliderArrows";
import { Container, SubContainer } from "./components";
import Slide from "./components/Slide";
import SliderContent from "./components/SliderContent";
import { picturesForSlider } from "../../assets/const/preferencies";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const pictures = picturesForSlider;

  const clickNextPictures = () => {
    if (index < pictures.length - 1) {
      setIndex(index + 1);
    }
  };

  const clickPreviousPictures = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };
  const disableLeft = index === 0;
  const disableRight = index === pictures.length - 1;

  return (
    <Container>
      <SubContainer>
        <SliderContent coordinates={index} numberOfPictures={pictures.length}>
          {pictures.map((item) => {
            return (
              <Slide
                key={item.id}
                image={item.url}
                text={item.text}
                title={item.title}
              />
            );
          })}
        </SliderContent>
      </SubContainer>
      <SliderArrows
        onClickLeft={clickPreviousPictures}
        onClickRight={clickNextPictures}
        disableLeft={disableLeft}
        disableRight={disableRight}
      ></SliderArrows>
    </Container>
  );
};

export default Slider;
