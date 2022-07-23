import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 224px;
  height: 48px;
  background-color: white;
  z-index: 1;
  font-family: "Roboto";
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    margin-right: 20px;
  }
`;

const Border = ({ text }: { text: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="236"
    height="60"
    viewBox="0 0 236 60"
  >
    <defs>
      <filter
        id="Прямоугольник_48"
        x="0"
        y="0"
        width="236"
        height="60"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="Button_Delivery"
      data-name="Button Delivery"
      transform="translate(6 4)"
    >
      <g transform="matrix(1, 0, 0, 1, -6, -4)" filter="url(#Прямоугольник_48)">
        <rect
          id="Прямоугольник_48-2"
          data-name="Прямоугольник 48"
          width="224"
          height="48"
          transform="translate(6 4)"
          fill="#fff"
        />
      </g>
      <text
        id="DELIVERY_"
        data-name="DELIVERY

"
        transform="translate(40 16)"
        fill="#202020"
        font-size="14"
        font-family="SegoeUI, Segoe UI"
      >
        <tspan style={{ fontFamily: "Roboto" }} x="58.582" y="15">
          {text}
        </tspan>
      </text>
      <g id="box" transform="translate(14 8)">
        <g
          id="Сгруппировать_21"
          data-name="Сгруппировать 21"
          transform="translate(-3.999 2)"
        >
          <path
            id="Контур_265"
            data-name="Контур 265"
            d="M27.821,12.667l-3.281-4.1a.839.839,0,0,0-.383-.266L17.388,6.058a4.368,4.368,0,0,0,1.5-3.029A2.915,2.915,0,0,0,16.035,0,2.654,2.654,0,0,0,14,.937,2.654,2.654,0,0,0,11.965,0,2.915,2.915,0,0,0,9.11,3.029a4.269,4.269,0,0,0,1.526,3.024L3.9,8.3a.836.836,0,0,0-.377.261l-3.336,4.1a.82.82,0,0,0,.322,1.275L1.7,14.43v7.828a.82.82,0,0,0,.5.754l11.484,4.922a.821.821,0,0,0,.647,0l11.538-4.921a.82.82,0,0,0,.5-.755v-7.85l1.134-.47a.82.82,0,0,0,.327-1.27ZM11.965,1.641c.881,0,1.221,1.086,1.245,1.165a.817.817,0,0,0,1.58,0c.024-.079.364-1.165,1.245-1.165A1.274,1.274,0,0,1,17.25,3.029c0,.638-.373,1.263-1.249,2.089-.412.389-.9.8-1.474,1.285L14,6.848l-.4-.338c-1.875-1.594-2.853-2.473-2.853-3.481A1.274,1.274,0,0,1,11.965,1.641Zm-9.814,11.2,2.284-2.808L12.722,12.8l-2.312,3.467C10.319,16.2,2.265,12.865,2.152,12.843ZM13.18,25.936,3.336,21.717V15.11l7.069,2.929a.82.82,0,0,0,1-.3l1.778-2.668V25.936ZM14,11.495,6.751,9.078,12.025,7.32l.517.441c.3.251.6.511.922.789a.82.82,0,0,0,1.074,0c.367-.318.713-.61,1.048-.893l.4-.336L21.29,9.079ZM24.719,21.716l-9.9,4.222V15.069L16.6,17.736a.82.82,0,0,0,1,.3l7.123-2.952Zm-7.129-5.45L15.28,12.8l8.335-2.763,2.243,2.8Z"
            transform="translate(0 0)"
            fill="#ababab"
          />
        </g>
      </g>
      <g id="border_circle" data-name="border circle">
        <rect
          id="Прямоугольник_109"
          data-name="Прямоугольник 109"
          width="205"
          height="1"
          transform="translate(9 45)"
          fill="#ababab"
        />
        <rect
          id="Прямоугольник_110"
          data-name="Прямоугольник 110"
          width="205"
          height="1"
          transform="translate(9 2)"
          fill="#ababab"
        />
        <path
          id="Вычитание_3"
          data-name="Вычитание 3"
          d="M-7427-7566h0v-1a7.008,7.008,0,0,0,7-7h1A8.008,8.008,0,0,1-7427-7566Z"
          transform="translate(7429 7576)"
          fill="#ababab"
        />
        <path
          id="Вычитание_6"
          data-name="Вычитание 6"
          d="M-7419-7566h0v-1a7.008,7.008,0,0,1-7-7h-1A8.008,8.008,0,0,0-7419-7566Z"
          transform="translate(7641 7576)"
          fill="#ababab"
        />
        <path
          id="Вычитание_9"
          data-name="Вычитание 9"
          d="M-7427-7574h0v1a7.008,7.008,0,0,1,7,7h1A8.008,8.008,0,0,0-7427-7574Z"
          transform="translate(7429 7612)"
          fill="#ababab"
        />
        <path
          id="Вычитание_12"
          data-name="Вычитание 12"
          d="M-7419-7574h0v1a7.008,7.008,0,0,0-7,7h-1A8.008,8.008,0,0,1-7419-7574Z"
          transform="translate(7641 7612)"
          fill="#ababab"
        />
        <rect
          id="Прямоугольник_119"
          data-name="Прямоугольник 119"
          width="1"
          height="30"
          transform="translate(2 9)"
          fill="#ababab"
        />
        <rect
          id="Прямоугольник_120"
          data-name="Прямоугольник 120"
          width="1"
          height="30"
          transform="translate(221 9)"
          fill="#ababab"
        />
      </g>
    </g>
  </svg>
);

const TitleBtn = ({ text }: { text?: string }) => {
  const currentText = text ? text.toUpperCase() : "ТЕКСТ КНОПКИ";

  return (
    <Container>
      <Border text={currentText} />
    </Container>
  );
};

export default TitleBtn;
