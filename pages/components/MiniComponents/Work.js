import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function Work({
  title,
  desc,
  desc2,
  desc3,
  span1,
  span2,
  backgroundImg,
  list1,
  list2,
  list3,
  list4,
}) {
  return (
    <ProjectSection>
      <ProjectImage bgImage={backgroundImg}></ProjectImage>
      <ProjectDetails>
        <ProjectHead>
          <h3>Featured Project</h3>
          <h1>{title}</h1>
        </ProjectHead>
        <ProjectDescription>
          <p>
            {desc} <span> {span1} </span> {desc2}
            <span> {span2}</span> {desc3}
          </p>
        </ProjectDescription>
        <ProjectTools>
          <ul>
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
          </ul>
        </ProjectTools>
        <ProjectLinks>
          <GitHubIcon />
          <span></span>
          <LanguageIcon />
        </ProjectLinks>
      </ProjectDetails>
    </ProjectSection>
  );
}

export default Work;
const ProjectSection = styled.div`
  display: flex;
  padding: 30px 15px;
`;
const ProjectImage = styled.div`
  height: 400px;
  width: 4000px;
  background: linear-gradient(
      0deg,
      rgba(80, 84, 96, 0.1),
      rgba(80, 84, 96, 0.1)
    ),
    ${(props) => `url("/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProjectHead = styled.div`
  text-align: right;

  h3 {
    color: rgb(100, 255, 218);
  }
  h1 {
    color: #ccd6f6;
  }
`;
const ProjectDescription = styled.div`
  margin-left: -100px;
  padding: 5px 20px;
  background: #112240;
  border-radius: 10px;

  p {
    text-align: center;
    color: #ccd6f6;
    line-height: 1.6;
  }
`;
const ProjectTools = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
  }
`;
const ProjectLinks = styled.div`
  text-align: right;
  color: #ccd6f6;

  span {
    padding: 10px;
  }
`;
