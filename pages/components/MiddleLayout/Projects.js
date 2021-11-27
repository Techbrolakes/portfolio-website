import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

import Work from "../MiniComponents/Work";

function Projects() {
  return (
    <ProjectContainer>
      <ProjectHeading>
        <h1>
          <span>02. </span> Some Things I’ve Built
        </h1>
        <Line></Line>
      </ProjectHeading>
      <Work
        title="Landing-Page Design"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        desc3=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        span1="Lorem Ipsum"
        span2="Lekan Dar"
        backgroundImg="modern-ui.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
      />
      <Work
        title="Admin-Template"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        desc3=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        span1="Lorem Ipsum"
        span2="Lekan Dar"
        backgroundImg="admin.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
      />
      <Work
        title="My Portfolio Website"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        desc3=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        span1="Lorem Ipsum"
        span2="Lekan Dar"
        backgroundImg="portfolio.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
      />
      <Work
        title="Tesla-Clone"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        desc3=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        span1="Lorem Ipsum"
        span2="Lekan Dar"
        backgroundImg="tesla.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
      />
      <Work
        title="Boi-Unilag"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        desc3=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        span1="Lorem Ipsum"
        span2="Lekan Dar"
        backgroundImg="boi.png"
        list1="Hammer.js"
        list2="JQuery"
        list3="Bookly Api"
        list4="Php"
      />

      <ProjectShowHide>
        <Work
          title="Admin-Template"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          desc3=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          span1="Lorem Ipsum"
          span2="Lekan Dar"
          backgroundImg="admin.png"
          list1="Vs Code"
          list2="React"
          list3="Styled Components"
          list4="Vercel"
        />
      </ProjectShowHide>
      <ProjectButton>
        <Button variant="contained" size="large">
          Show More
        </Button>
      </ProjectButton>
    </ProjectContainer>
  );
}

export default Projects;
const ProjectContainer = styled.div`
  span {
    color: rgb(100, 255, 218);
  }
`;
const ProjectHeading = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #ccd6f6;
    margin-right: 20px;

    @media all and (min-width: 320px) and (max-width: 600px) {
      font-size: 20px;
      justify-content: center;
    }
    @media all and (min-width: 601px) and (max-width: 768px) {
    }
  }
  span {
    color: rgb(100, 255, 218);
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    margin: 40px 0;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
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
  @media all and (min-width: 601px) and (max-width: 768px) {
    width: 90px;
    border-bottom: 2px groove rgb(100, 255, 218);
  }
`;
const ProjectShowHide = styled.div`
  display: none;
`;
const ProjectButton = styled.div`
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
