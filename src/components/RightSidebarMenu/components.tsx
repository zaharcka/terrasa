import React from "react";
import styled from "styled-components";

export const SandwichIcon = ({
  margin,
  onClick,
}: {
  margin?: number;
  onClick?: () => void;
}) => (
  <div style={{ margin }} onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="24"
      viewBox="0 0 40 24"
    >
      <g id="Menu_2" data-name="Menu 2" transform="translate(-1848 -76)">
        <rect
          id="Прямоугольник_41"
          data-name="Прямоугольник 41"
          width="40"
          height="4"
          rx="2"
          transform="translate(1848 76)"
        />
        <rect
          id="Прямоугольник_42"
          data-name="Прямоугольник 42"
          width="40"
          height="4"
          rx="2"
          transform="translate(1848 86)"
        />
        <rect
          id="Прямоугольник_43"
          data-name="Прямоугольник 43"
          width="40"
          height="4"
          rx="2"
          transform="translate(1848 96)"
        />
      </g>
    </svg>
  </div>
);

export const PhoneIcon = ({ margin }: { margin?: number }) => (
  <div style={{ margin }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g id="PhoneButton" transform="translate(-1851 -123)">
        <g
          id="Эллипс_10"
          data-name="Эллипс 10"
          transform="translate(1851 123)"
          fill="#fff"
          stroke="silver"
          stroke-width="1"
        >
          <circle cx="20" cy="20" r="20" stroke="none" />
          <circle cx="20" cy="20" r="19.5" fill="none" />
        </g>
        <g id="phone" transform="translate(1860.994 133)">
          <g
            id="Сгруппировать_24"
            data-name="Сгруппировать 24"
            transform="translate(0.006)"
          >
            <path
              id="Контур_270"
              data-name="Контур 270"
              d="M2.88,57.448a1.4,1.4,0,0,1,2.118,0c.5.491.991.982,1.477,1.482A.292.292,0,0,0,6.884,59c.32-.175.662-.316.97-.508a15.365,15.365,0,0,0,3.7-3.371A8.775,8.775,0,0,0,12.885,53a.3.3,0,0,0-.075-.391c-.5-.479-.978-.97-1.465-1.461a1.407,1.407,0,0,1,0-2.168c.387-.391.774-.774,1.161-1.165s.795-.8,1.2-1.2a1.41,1.41,0,0,1,2.118,0c.5.491.978.995,1.486,1.477a2.412,2.412,0,0,1,.757,1.627,6.9,6.9,0,0,1-.533,2.967,18.032,18.032,0,0,1-3.2,5.331,19.806,19.806,0,0,1-6.559,5.132,9.486,9.486,0,0,1-3.633,1.057,2.663,2.663,0,0,1-2.285-.87c-.425-.474-.9-.907-1.353-1.361A1.416,1.416,0,0,1,.5,59.824Q1.686,58.632,2.88,57.448Z"
              transform="translate(1.914 -44.217)"
            />
            <path
              id="Контур_271"
              data-name="Контур 271"
              d="M239.39,101.918l-1.536-.262A6.894,6.894,0,0,1,243.685,96l.216,1.544a5.328,5.328,0,0,0-4.512,4.374Z"
              transform="translate(-233.8 -92.005)"
            />
            <path
              id="Контур_272"
              data-name="Контур 272"
              d="M245.942,3.238A11.324,11.324,0,0,1,252.435,0l.216,1.544a9.881,9.881,0,0,0-8.361,8.1l-1.536-.262A11.407,11.407,0,0,1,245.942,3.238Z"
              transform="translate(-242.754)"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
);

export const LangIcon = ({ onClick }: { onClick?: () => void }) => (
  <div style={{ margin: 10, display: "inline-block" }} onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
    >
      <g id="LanguageButton" transform="translate(-1851 -123)">
        <g
          id="Эллипс_10"
          data-name="Эллипс 10"
          transform="translate(1851 123)"
          fill="#fff"
          stroke="silver"
          stroke-width="1"
        >
          <circle cx="17" cy="17" r="17" stroke="none" />
          <circle cx="17" cy="17" r="16.5" fill="none" />
        </g>
        <text
          id="EN"
          transform="translate(1855 133)"
          fill="#202020"
          font-size="12"
          font-family="SegoeUI-Bold, Segoe UI"
          font-weight="700"
          letter-spacing="0.022em"
        >
          <tspan x="4.934" y="13">
            EN
          </tspan>
        </text>
      </g>
    </svg>
  </div>
);

export const Container = styled.div<{ isOpenMenu?: boolean }>`
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const OpenContainer = styled.div<{
  opacity?: number;
  visible?: boolean;
}>`
  position: absolute;
  width: 400px;
  height: 100vh;
  background-color: #0e0e0f;
  right: 0;
  z-index: 1200;
  align-items: end;
  color: white;
  opacity: ${(props) => props.opacity};
  margin-top: -20px;
  transition: opacity 0.15s;
`;

export const OpenContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 30px;
`;

export const CloseIcon = ({ onClick }: { onClick: () => void }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="26.87"
    height="26.87"
    viewBox="0 0 26.87 26.87"
  >
    <g id="Close" transform="translate(-1854.565 -74.565)">
      <rect
        id="Прямоугольник_52"
        data-name="Прямоугольник 52"
        width="34"
        height="4"
        rx="2"
        transform="translate(1857.393 74.565) rotate(45)"
        fill="#fff"
      />
      <rect
        id="Прямоугольник_53"
        data-name="Прямоугольник 53"
        width="34"
        height="4"
        rx="2"
        transform="translate(1854.565 98.607) rotate(-45)"
        fill="#fff"
      />
    </g>
  </svg>
);

export const MenuItemsContainer = styled.div`
  width: 300px;
  padding-left: 40px;
`;

export const MenuItemStyled = styled.div`
  display: flex;
  flex-direction: column;

  height: 71px;
  border-bottom: #707070 1px;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  :hover {
    background: linear-gradient(to right, transparent, rgb(137 255 59 / 30%));
    margin-left: -20px;
    transition: margin-left 0.1s;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #707070;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const MenuText = styled.p`
  font-size: 28px;
  margin-block: 0px;
`;

export const PhoneBlock = styled.div`
  margin-top: 47px;
`;

export const PhoneText = styled.span`
  color: #OEOEOF;
  margin-right: 20px;
`;

export const PhoneNumber = styled.span`
  font-size: 26px;
`;

export const LanguageText = styled.span`
  color: #OEOEOF;
  margin-right: 20px;
`;

export const PhoneAndLangContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
