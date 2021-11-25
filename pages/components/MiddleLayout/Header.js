import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div>
      <Heading>
        <h3>Hi, my name is</h3>
        <h1>
          Lekan Dar <br /> <span>I build things for the web.</span>
        </h1>
        <p>
          I&rsquo;m a design-minded <span>Front-End Software Engineer</span> &
          <span> Product Designer</span> <br /> focused on building beautiful
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
  h3 {
    color: rgb(100, 255, 218);
    letter-spacing: 2px;

    @media all and (min-width: 601px) and (max-width: 768px) {
      font-size: 32px;
    }
  }

  h1 {
    font-size: 68px;
    color: #ccd6f6;
    font-weight: 700;
    margin: 0;

    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 26px;
      text-align: center;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      text-align: center;
      font-size: 52px;
      width: 100%;
    }

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

    @media all and (min-width: 320px) and (max-width: 600px) {
      padding: 5px 20px;
      font-size: 16px;
      text-align: center;

      br {
        display: none;
      }
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      font-size: 20px;

      br {
        display: none;
      }
    }
  }
  Button {
    font-family: "lato";
    font-weight: 600;
    text-transform: capitalize;
    font-size: 17px;
    color: #000;
    background: rgb(100, 255, 218);

    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 12px;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      font-size: 24px;
    }
  }
  Button:hover {
    color: #000;
    background: #ccd6f6;
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    text-align: center;
    margin-bottom: 0;
  }
`;
const Emoji = styled.span`
  font-size: 28px;
`;
