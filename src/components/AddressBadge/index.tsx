import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  align-self: flex-start;
  margin-left: 45px;
  bottom: 30px;
  position: absolute;
`;

const AddressBadge = () => {
  return (
    <BadgeContainer>
      <svg
        id="Address"
        xmlns="http://www.w3.org/2000/svg"
        width="251.229"
        height="37.363"
        viewBox="0 0 251.229 37.363"
      >
        <text
          id="Moscow._Uglichskaya_St._13_p._3"
          data-name="Moscow. Uglichskaya St., 13 p. 3"
          transform="translate(46.229 25)"
          fill="#202020"
          font-size="14"
          font-family="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            Moscow. Uglichskaya St., 13 p. 3
          </tspan>
        </text>
        <g id="place" transform="translate(-48.886)">
          <g
            id="Сгруппировать_18"
            data-name="Сгруппировать 18"
            transform="translate(48.886)"
          >
            <g
              id="Сгруппировать_17"
              data-name="Сгруппировать 17"
              transform="translate(0)"
            >
              <path
                id="Контур_263"
                data-name="Контур 263"
                d="M76.4,6.5a15.086,15.086,0,0,0-24.8,0,15.088,15.088,0,0,0-1.757,13.9,11.883,11.883,0,0,0,2.19,3.616L63.006,36.9A1.305,1.305,0,0,0,65,36.9L75.966,24.017a11.894,11.894,0,0,0,2.19-3.611A15.091,15.091,0,0,0,76.4,6.5Zm-.693,12.995a9.319,9.319,0,0,1-1.723,2.823l-.006.007L64,34.042,54.015,22.314a9.325,9.325,0,0,1-1.726-2.831,12.481,12.481,0,0,1,1.459-11.5,12.473,12.473,0,0,1,20.505,0A12.483,12.483,0,0,1,75.709,19.491Z"
                transform="translate(-48.886)"
              />
            </g>
          </g>
          <g
            id="Сгруппировать_20"
            data-name="Сгруппировать 20"
            transform="translate(56.685 7.751)"
          >
            <g
              id="Сгруппировать_19"
              data-name="Сгруппировать 19"
              transform="translate(0)"
            >
              <path
                id="Контур_264"
                data-name="Контур 264"
                d="M163.07,106.219a7.316,7.316,0,1,0,7.316,7.316A7.324,7.324,0,0,0,163.07,106.219Zm0,12.019a4.7,4.7,0,1,1,4.7-4.7A4.709,4.709,0,0,1,163.07,118.238Z"
                transform="translate(-155.754 -106.219)"
              />
            </g>
          </g>
        </g>
      </svg>
    </BadgeContainer>
  );
};

export default AddressBadge;
