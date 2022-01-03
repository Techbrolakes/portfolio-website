import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Fade from "react-reveal/Fade";

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
          <Fade>
            <AboutParagraph>
              <p>
                Hello! My name is Lekan and I enjoy
                <span> creating and designing things </span>
                that live on the internet. I&rsquo;m also a student of
                <span> Geology</span> at the
                <span> University of Lagos, Nigeria.</span>
              </p>
              <p>
                I have experience working remotely building
                <span> meaningful and productive software </span> with also the
                ability to work with minimal supervision as I have the zeal to
                tackle any problems I might encounter independently to achieve
                the desired result.
              </p>
              <p>
                Here are a few <span>technologies</span> I&rsquo;ve been working
                with recently:
              </p>
              <ListContainer>
                <ListItemsOne>
                  <ul>
                    <li>
                      <FingerprintIcon /> Javascript
                    </li>
                    <li>
                      <FingerprintIcon />
                      Node Js
                    </li>
                    <li>
                      <FingerprintIcon />
                      PHP
                    </li>
                  </ul>
                </ListItemsOne>
                <ListItemsTwo>
                  <ul>
                    <li>
                      <FingerprintIcon />
                      React JS
                    </li>
                    <li>
                      <FingerprintIcon />
                      Vue Js
                    </li>
                    <li>
                      <FingerprintIcon />
                      Figma
                    </li>
                  </ul>
                </ListItemsTwo>
              </ListContainer>
            </AboutParagraph>
          </Fade>

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
  span {
    color: rgb(100, 255, 218);
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    padding: 10px;
    margin: 30px 0;
  }
`;

const AboutHeading = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #ccd6f6;
    margin-right: 20px;

    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 20px;
      justify-content: center;
    }
  }
  span {
    color: rgb(100, 255, 218);
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const AboutParagraph = styled.div`
  color: #fff;
  font-family: "lato";
  p {
    color: #8892b0;
    font-size: 20px;
    line-height: 26px;
    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 16px;
      text-align: center;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      text-align: center;
      font-size: 18px;
    }
  }
`;
const AboutImage = styled.div`
  margin: 0 50px;
  object-fit: cover;
  opacity: 0.99;
  transition: all ease-in 0.17s;
  position: relative;
  display: inline-block;

  ::before {
    content: "";
    position: absolute;
    left: 0.09rem;
    top: 1rem;
    border: 4px solid #64ffda;
    width: 100%;
    height: 85%;
    z-index: -1;
  }
  ::after {
    content: "";
    position: absolute;
    left: 0.6rem;
    top: 2rem;
    border: 4px solid #64ffda;
    width: 100%;
    height: 90%;
    z-index: -1;
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    width: 200px;
    margin: 0 auto;
    padding: 10px;

    ::after {
      content: "";
      position: absolute;
      left: 2rem;
      top: 1rem;
      border: 4px solid #64ffda;
      width: 100%;
      height: 85%;
      z-index: -1;
    }
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    width: 50%;
    margin: 0 auto;
    padding: 10px;

    ::after {
      content: "";
      position: absolute;
      left: 2rem;
      top: 1rem;
      border: 4px solid #64ffda;
      width: 100%;
      height: 85%;
      z-index: -1;
    }
  }
`;
const Line = styled.div`
  width: 400px;
  border-bottom: 0.3px groove #8892b0;

  @media all and (min-width: 320px) and (max-width: 600px) {
    width: 150px;
    border-bottom: 2px groove rgb(100, 255, 218);
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    width: 90px;
    border-bottom: 2px groove rgb(100, 255, 218);
  }
`;
const ListContainer = styled.div`
  display: flex;
  width: 400px;
  color: rgb(100, 255, 218);

  font-size: 21px;

  @media all and (min-width: 320px) and (max-width: 600px) {
    font-size: 16px;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }
`;
const ListItemsOne = styled.div`
  li {
    display: flex;
    margin: 10px;
    color: rgb(100, 255, 218);

    justify-content: space-between;
    align-items: center;
    width: 140px;

    @media all and (min-width: 320px) and (max-width: 600px) {
      width: 100px;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      width: 100%;
    }
  }
`;
const ListItemsTwo = styled.div`
  li {
    color: rgb(100, 255, 218);
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media all and (min-width: 320px) and (max-width: 600px) {
      width: 100%;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
      width: 100%;
    }
  }
`;
