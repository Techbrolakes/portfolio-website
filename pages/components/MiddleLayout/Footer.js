import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
      <h4>Designed & Built By Lekan Dar</h4>
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.div`
  color: #ccd6f6;
  padding: 16px;
  text-align: center;
`;
