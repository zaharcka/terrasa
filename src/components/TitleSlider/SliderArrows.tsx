import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 50;
  top: 50%;
  right: -30px;
  display: flex;
`;

const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 50px solid #ffffff;
  cursor: pointer;

  :hover {
    border-right: 50px solid #f6f6f6;
  }
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid #ffffff;
  cursor: pointer;
  position: relative;

  :hover {
    border-left: 50px solid #f6f6f6;
    box-shadow: aqua;
  }
`;

const ArrowRightLabel = ({ disable }: { disable?: boolean }) => (
  <div style={{ position: "absolute", top: -25, right: 13 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.565"
      height="51.13"
      viewBox="0 0 25.565 51.13"
    >
      <path
        id="left-chevron"
        d="M142.576,25.565,163.348,4.793V0L137.783,25.565,163.348,51.13V46.337Z"
        transform="translate(163.348 51.13) rotate(180)"
        fill={disable ? "#ababab" : undefined}
      />
    </svg>
  </div>
);

const ArrowLeftLabel = ({ disable }: { disable?: boolean }) => (
  <div style={{ position: "absolute", top: 25, left: 13 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.565"
      height="51.13"
      viewBox="0 0 25.565 51.13"
    >
      <path
        id="left-chevron"
        d="M142.576,25.565,163.348,4.793V0L137.783,25.565,163.348,51.13V46.337Z"
        transform="translate(-137.783)"
        fill={disable ? "#ababab" : undefined}
      />
    </svg>
  </div>
);

const SliderArrows = ({
  onClickLeft,
  onClickRight,
  disableLeft,
  disableRight,
}: {
  onClickLeft?: () => void;
  onClickRight?: () => void;
  disableLeft?: boolean;
  disableRight?: boolean;
}) => {
  return (
    <Container>
      <ArrowLeft onClick={onClickLeft}>
        <ArrowLeftLabel disable={disableLeft} />
      </ArrowLeft>
      <ArrowRight onClick={onClickRight}>
        <ArrowRightLabel disable={disableRight} />
      </ArrowRight>
    </Container>
  );
};

export default SliderArrows;
