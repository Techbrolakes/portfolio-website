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
    <WebsiteLayout>
      {/* SOCIAL-LINKS */}
      <Container>
        <SocialLinks />
      </Container>
      {/* SOCIAL-LINKS */}

      {/* MIDDLE SECTION */}
      <MiddleLayout>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </MiddleLayout>
      {/* MIDDLE SECTION */}

      {/* EMAIL-SECTION */}
      <EmailSection>
        <Email />
      </EmailSection>
      {/* EMAIL-SECTION */}
    </WebsiteLayout>
  );
}

export default Portfolio;

const WebsiteLayout = styled.div`
  display: flex;
  cursor: pointer;
`;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  color: white;
`;

const MiddleLayout = styled.div`
  width: 80%;
  margin: 0 auto;

  @media all and (min-width: 1px) and (max-width: 600px) {
    width: 100%;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    width: 100%;
  }
`;
const EmailSection = styled.div`
  color: white;
`;
