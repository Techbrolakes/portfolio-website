import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Fade from "react-reveal/Fade";
import styles from "../../../styles/Navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };
  return (
    <Heading>
      <Fade bottom>
        <LogoContainer>
          <h1 className={styles.fonts}>
            Lekan <span> Dar</span>
          </h1>
        </LogoContainer>

        <Link>
          <ul>
            <li>
              <span>01.</span>
              Home
            </li>
            <li>
              <span>02.</span>
              Work
            </li>
            <li>
              <span>03.</span>
              Contact
            </li>
            <Button variant="contained">
              <a href="Lekandar.pdf" download>
                Resume
              </a>
            </Button>
          </ul>
        </Link>
      </Fade>
    </Heading>
  );
}

export default Navbar;

const LogoContainer = styled.div`
  text-align: center;
  padding: 0.1rem 1.3rem;

  h1 {
    text-align: center;
    color: #64ffda;
    span {
      color: #64ffda;
    }
  }
`;

const Heading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 99%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 30px;
  background: #09192f;

  @media all and (min-width: 320px) and (max-width: 600px) {
    padding: 0;
    justify-content: center;
    width: 95%;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    padding: 0;
    justify-content: center;
    width: 90%;
  }
  @media all and (min-width: 769px) and (max-width: 1180px) {
    padding: 0;
    justify-content: center;
    width: 90%;
  }
  Button {
    font-family: "lato";
    font-weight: 600;
    text-transform: capitalize;
    font-size: 14px;
    color: #000;
    background: rgb(100, 255, 218);

    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 12px;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      font-size: 16px;
    }
    @media all and (min-width: 769px) and (max-width: 1180px) {
      font-size: 14px;
    }
  }
  Button:hover {
    color: #000;
    background: #ccd6f6;
  }
`;

const Link = styled.div`
  padding: 20px;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  span {
    color: #64ffda;
    margin: 0px 10px;
  }
  li {
    color: #ccd6f6;
    list-style: none;
    margin: 0 12px;
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    display: none;
  }
`;
