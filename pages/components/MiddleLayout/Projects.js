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
      <ProjectShowHide>
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
  }
  span {
    color: rgb(100, 255, 218);
  }
`;
const Line = styled.div`
  width: 400px;
  border-bottom: 0.3px groove #8892b0;
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
