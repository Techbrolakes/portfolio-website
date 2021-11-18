import React from "react";
import Image from "next/image";
import styled from "styled-components";

function About() {
  return (
    <div>
      <AboutContainer>
        <AboutHeading>
          <h1>
            <span>01. </span> About Me
          </h1>
          <Line></Line>
        </AboutHeading>

        <AboutContent>
          <AboutParagraph>
            <p>
              Hello! My name is Lekan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p>
              I have experience working remotely building meaningful and
              productive software with also the ability to work with minimal
              supervision as I have the zeal to tackle any problems I might
              encounter independently to achieve the desired result.
            </p>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
          </AboutParagraph>
          <AboutImage>
            <Image src="/lekan2.jpg" width={1200} height={1400} alt="Lekan" />
          </AboutImage>
        </AboutContent>
      </AboutContainer>
    </div>
  );
}

export default About;

const AboutContainer = styled.div`
  color: #fff;
  padding: 1rem 3rem;
  font-family: "lato";
`;
const AboutHeading = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #ccd6f6;
    margin-right: 20px;
  }
  span {
    color: rgb(100, 255, 218);
  }
`;
const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AboutParagraph = styled.div`
  color: #fff;
  font-family: "lato";
  p {
    color: #8892b0;
    font-size: 20px;
    line-height: 26px;
  }
`;
const AboutImage = styled.div`
  margin: 0 50px;
  cursor: pointer;
  object-fit: cover;
  opacity: 0.99;
  transition: all ease-in 0.5s;
  position: relative;
  display: inline-block;

  ::after {
    content: "";
    position: absolute;
    left: 3rem;
    top: 1rem;
    border: 4px solid #64ffda;
    width: 100%;
    height: 80%;
    z-index: -1;
  }
`;
const Line = styled.div`
  width: 400px;
  border-bottom: 0.3px groove #8892b0;
`;
