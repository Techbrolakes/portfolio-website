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
              Send me a direct email today
            </Button>
          </ContactForm>
          <SocialSegment>
            <h4> Check me out on this platforms</h4>
            <IconDiv>
              <Tooltip title="Behance">
                <i class="lab la-behance"></i>
              </Tooltip>
              <Tooltip title="Github">
                <i class="lab la-github"></i>
              </Tooltip>
              <Tooltip title="Dribble">
                <i class="lab la-dribbble"></i>
              </Tooltip>
              <Tooltip title="Linkedin">
                <i class="lab la-linkedin"></i>
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
