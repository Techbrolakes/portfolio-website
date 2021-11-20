import React from "react";
import styled from "styled-components";

function Email() {
  return (
    <EmailBar>
      <h3>Lekandar11@gmail.com</h3>
      <Line></Line>
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
  bottom: 0;
  left: 1100px;
  display: flex;
  color: #ccd6f6;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  transform: rotate(90deg);

  h3 {
    margin-right: 20px;
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    display: none;
  }
`;
