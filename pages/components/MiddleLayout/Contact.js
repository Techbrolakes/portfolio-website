import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Image from "next/image";

// import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function Contact() {
  return (
    <div>
      <ContactHeading>
        <h1>
          <span>03. </span> Get In Touch
        </h1>
        <Line></Line>
      </ContactHeading>
      <ContactContainer>
        <ContactDetails>
          <ContactInformation>
            <h1>Contact Information</h1>
            <h4>
              My inbox is always open. Whether you have a question or just want
              to say hi, I’ll try my best to get back to you!
            </h4>
          </ContactInformation>
          <ContactForm>
            <Button variant="contained" size="large">
              Send me a direct email today
            </Button>
          </ContactForm>
          <SocialSegment>
            <h4> Check me out on this platforms</h4>
            <ImageDiv>
              <Image
                src="/dribbble-brands.svg"
                width={50}
                height={50}
                alt="dribble"
              />
              <span></span>
              <Image src="/dev-brands.svg" width={50} height={50} alt="dev" />
            </ImageDiv>
          </SocialSegment>
        </ContactDetails>
      </ContactContainer>
    </div>
  );
}

export default Contact;

const ContactHeading = styled.div`
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
`;
const Line = styled.div`
  width: 400px;
  border-bottom: 0.3px groove #8892b0;

  @media all and (min-width: 320px) and (max-width: 600px) {
    width: 150px;
    border-bottom: 2px groove rgb(100, 255, 218);
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContactDetails = styled.div`
  padding: 30px;
  width: 900px;
  background: #112240;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  @media all and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    background: none;
    box-shadow: none;
  }
`;
const ContactInformation = styled.div`
  flex: 1;
  color: #fff;

  h1 {
    text-align: center;
  }
`;
const ContactForm = styled.div`
  flex: 1;
  text-align: center;
  Button {
    font-family: "lato";
    font-weight: 600;
    text-transform: capitalize;
    font-size: 17px;
    color: #000;
    background: rgb(100, 255, 218);
  }
  Button:hover {
    color: #000;
    background: #ccd6f6;
  }
`;
const SocialSegment = styled.div`
  color: #fff;

  text-align: center;

  span {
    padding: 10px;
  }
`;
const ImageDiv = styled.div`
  color: #fff;
`;
