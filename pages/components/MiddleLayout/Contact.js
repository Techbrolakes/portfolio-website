import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";

// import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function Contact() {
  return (
    <ContactBox>
      <ContactHeading>
        <h3>03. What&rsquo;s Next</h3>
        <h1>Get In Touch</h1>
      </ContactHeading>
      <ContactContainer>
        <ContactDetails>
          <ContactInformation>
            <h4>
              My inbox is always open. Whether you have a question or just want
              to say hi, I&rsquo;ll try my best to get back to you!
            </h4>
          </ContactInformation>
          <ContactForm>
            <Button variant="contained" size="medium">
              <a href="mailto:lekandar11@gmail.com">
                Send me a direct email today
              </a>
            </Button>
          </ContactForm>
          <SocialSegment>
            <h4> Check me out on this platforms</h4>
            <IconDiv>
              <Tooltip title="Whatsapp">
                <a href="https://wa.me/+2347069217291?text=Hi,%20Lekan%20Dar%20I%20love%20your%20works">
                  <i className="lab la-whatsapp"></i>
                </a>
              </Tooltip>
              <Tooltip title="Github">
                <a href="https://github.com/Lekan1">
                  <i className="lab la-github"></i>
                </a>
              </Tooltip>
              <Tooltip title="Dribble">
                <i className="lab la-dribbble"></i>
              </Tooltip>
              <Tooltip title="Linkedin">
                <a href="https://www.linkedin.com/in/lekan-dar-02bb8721a/">
                  <i className="lab la-linkedin"></i>
                </a>
              </Tooltip>
            </IconDiv>
          </SocialSegment>
        </ContactDetails>
      </ContactContainer>
    </ContactBox>
  );
}

export default Contact;

const ContactBox = styled.div`
  padding: 20px;
  @media all and (min-width: 320px) and (max-width: 600px) {
    margin-top: 60px;
  }
`;

const ContactHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #ccd6f6;
    font-size: 48px;

    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 20px;
      justify-content: center;
    }
  }
  h3 {
    color: rgb(100, 255, 218);
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    display: flex;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContactDetails = styled.div`
  width: 700px;

  @media all and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    background: none;
    box-shadow: none;
  }
`;
const ContactInformation = styled.div`
  flex: 1;
  color: #ccd6f6;
  text-align: center;

  h4 {
    @media all and (min-width: 601px) and (max-width: 768px) {
      width: 100%;
    }
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    width: 100%;
  }
`;
const ContactForm = styled.div`
  flex: 1;
  text-align: center;
  color: #ccd6f6;

  Button {
    font-family: "lato";
    font-weight: 600;
    text-transform: capitalize;
    font-size: 14px;
    color: #000;
    background: rgb(100, 255, 218);
  }
  Button:hover {
    color: #000;
    background: #ccd6f6;
  }
`;
const SocialSegment = styled.div`
  text-align: center;

  h4 {
    color: #ccd6f6;
  }

  span {
    padding: 10px;
  }
`;
const IconDiv = styled.div`
  font-size: 32px;
  color: #ccd6f6;

  i {
    padding: 2px;
  }
`;
