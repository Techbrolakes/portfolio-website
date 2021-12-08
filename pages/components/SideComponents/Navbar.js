import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
function Navbar() {
  return (
    <Heading>
      <Fade bottom>
        <Image src="/ld4.svg" width={200} height={200} alt="Logo" />
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

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 15px;
  Button {
    color: #000;
    background: rgb(100, 255, 218);
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
