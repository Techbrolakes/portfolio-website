import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Email() {
  return (
    <EmailBar>
      <Fade left>
        <h3>Lekandar11@gmail.com</h3>
        <Line></Line>
      </Fade>
    </EmailBar>
  );
}

export default Email;

const Line = styled.div`
  width: 120px;
  border-bottom: 1px solid #ccd6f6;
  transform: rotate(-180deg);
`;
const EmailBar = styled.div`
  position: fixed;
  bottom: 130px;
  z-index: 2;
  right: -10%;
  display: flex;
  color: #ccd6f6;
  align-items: center;
  transform: rotate(90deg);

  h3 {
    margin-right: 20px;
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    display: none;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    display: none;
  }
`;
