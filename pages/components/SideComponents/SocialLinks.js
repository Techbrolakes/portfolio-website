import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Tooltip } from "@mui/material";

function SocialLinks() {
  return (
    <div>
      <Links>
        <Tooltip title="Github">
          <GitHubIcon />
        </Tooltip>
        <Tooltip title="Instagram">
          <Instagram />
        </Tooltip>
        <Tooltip title="WhatsApp">
          <WhatsApp />
        </Tooltip>
        <Tooltip title="LinkedIn">
          <LinkedIn />
        </Tooltip>
        <Tooltip title="Twitter">
          <TwitterIcon />
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

  @media all and (min-width: 320px) and (max-width: 600px) {
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
