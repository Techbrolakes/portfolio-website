import React from "react";
import styled from "styled-components";
import SocialLinks from "./SideComponents/SocialLinks";
import Email from "./SideComponents/Email";
import Header from "./MiddleLayout/Header";
import About from "./MiddleLayout/About";
import Projects from "./MiddleLayout/Projects";
import Contact from "./MiddleLayout/Contact";
import Footer from "./MiddleLayout/Footer";

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
          <About />
          <Projects />
          <Contact />
          <Footer />
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 1050px;
  height: 550vh;
  @media all and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
  }
`;
const EmailSection = styled.div`
  color: white;
`;
