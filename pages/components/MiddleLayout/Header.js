import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Fade from "react-reveal/Fade";

function Header() {
  return (
    <div>
      <Heading>
        <h3>Hi, my name is</h3>
        <Fade left>
          <h1>
            Lekan Dar <br /> <span>I build things for the web.</span>
          </h1>
        </Fade>
        <Fade right>
          <p>
            I&rsquo;m a design-minded <span>Full Stack Developer </span>&
            <span> a Budding Ui/Ux Designer</span> <br /> focused on building
            beautiful interfaces & experiences <Emoji>👨‍💻</Emoji>
          </p>
        </Fade>

        <Fade bottom>
          <Button variant="contained" size="large">
            <a href="Lekan.pdf" download>
              Download Resume
            </a>
          </Button>
        </Fade>
      </Heading>
    </div>
  );
}

export default Header;

const Heading = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: rgb(100, 255, 218);
    letter-spacing: 2px;

    @media all and (min-width: 601px) and (max-width: 768px) {
      font-size: 32px;
    }
    @media all and (min-width: 769px) and (max-width: 1180px) {
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
    @media all and (min-width: 769px) and (max-width: 1180px) {
      text-align: center;
      font-size: 52px;
      width: 100%;
    }    }

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
    margin: 60px 0 0 0;
    padding: 25px 1px;
    height: 45vh;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    text-align: center;
    padding: 42px 1px;
    height: 45vh;
    margin-bottom: 0;
  }
  @media all and (min-width: 769px) and (max-width: 1180px) {
    text-align: center;
    padding: 40px 1px;
    height: 45vh;
    margin-bottom: 0;
  }
`;
const Emoji = styled.span`
  font-size: 28px;
`;
