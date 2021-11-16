import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function Header() {
  return (
    <div>
      <Heading>
        <h3>Hi, my name is</h3>
        <h1>
          Lekan Dar <br /> <span>I build things for the web.</span>
        </h1>
        <p>
          I'm a design-minded <span>Front-End Software Engineer</span> &{" "}
          <span>Product Designer</span> <br /> focused on building beautiful
          interfaces & experiences <Emoji>👨‍💻</Emoji>
        </p>
        <Button variant="contained" size="large">
          Check out my works
        </Button>
      </Heading>
    </div>
  );
}

export default Header;

const Heading = styled.div`
  cursor: pointer;

  h3 {
    color: rgb(100, 255, 218);
    letter-spacing: 2px;
  }

  h1 {
    font-size: 68px;
    color: #ccd6f6;
    font-weight: 700;
    margin: 0;

    span {
      color: #8892b0;
    }
  }
  span {
    color: rgb(100, 255, 218);
  }
  p {
    font-size: 20px;
    color: #8892b0;
    line-height: 1.6;
  }
  Button {
    font-family: "lato";
    font-weight: 600;
    text-transform: capitalize;
    font-size: 17px;
    color: #000;
    background: rgb(100, 255, 218);
  }
  Button:hover {
    color: #000;
    background: #ccd6f6;
  }
`;
const Emoji = styled.span`
  font-size: 28px;
`;
