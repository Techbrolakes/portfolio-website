import React from "react";
import styled from "styled-components";
import SocialLinks from "./SideComponents/SocialLinks";
import Email from "./SideComponents/Email";
import Header from "./MiddleLayout/Header";

function Portfolio() {
  return (
    <HeroSection>
      {/* SOCIAL-LINKS */}
      <Container>
        <SocialLinks />
      </Container>
      {/* SOCIAL-LINKS */}

      {/* MIDDLE SECTION */}
      <MiddleSection>
        <MiddleLayout>
          <Header />
        </MiddleLayout>
      </MiddleSection>
      {/* MIDDLE SECTION */}

      {/* EMAIL-SECTION */}
      <EmailSection>
        <Email />
      </EmailSection>
      {/* EMAIL-SECTION */}
    </HeroSection>
  );
}

export default Portfolio;

const HeroSection = styled.div`
  position: relative;
`;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  color: white;
`;
const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MiddleLayout = styled.div`
  cursor: pointer;
  width: 1050px;
`;
const EmailSection = styled.div`
  color: white;
`;
