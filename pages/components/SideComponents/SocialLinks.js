import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";

function SocialLinks() {
  return (
    <div>
      <Links
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 10 }}
      >
        <Tooltip title="Github">
          <a href="https://github.com/Lekan1">
            <GitHubIcon />
          </a>
        </Tooltip>
        <Tooltip title="Instagram">
          <Instagram />
        </Tooltip>

        <Tooltip title="WhatsApp">
          <a href="https://wa.me/07069217291?text=Hi,%20Lekan%20Dar%20I%20love%20your%20works">
            <WhatsApp />
          </a>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <a href="https://www.linkedin.com/in/lekan-dar-02bb8721a/">
            <LinkedIn />
          </a>
        </Tooltip>

        <LineOne></LineOne>
      </Links>
    </div>
  );
}

export default SocialLinks;

const Links = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ccd6f6;

  @media all and (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    display: none;
  }
`;

const LineOne = styled.div`
  margin-top: 10px;
  width: 120px;
  height: 10px;
  border-bottom: 1px solid #ccd6f6;
  transform: rotate(90deg);
`;
