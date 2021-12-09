import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Fade from "react-reveal/Fade";

function Work({
  title,
  desc,
  desc2,
  backgroundImg,
  list1,
  list2,
  list3,
  list4,
  websiteLink,
}) {
  return (
    <ProjectSection>
      <ProjectImage bgImage={backgroundImg}></ProjectImage>
      <Fade>
        <ProjectDetails>
          <ProjectHead>
            <h3>Featured Project</h3>
            <h1>{title}</h1>
          </ProjectHead>
          <ProjectDescription>
            <p>
              {desc} <span> </span> {desc2}
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
            <Button variant="contained" size="medium">
              <a href={websiteLink} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </Button>
          </ProjectLinks>
        </ProjectDetails>
      </Fade>
    </ProjectSection>
  );
}

export default Work;
const ProjectSection = styled.div`
  display: flex;
  padding: 30px 15px;

  @media all and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const ProjectImage = styled.div`
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

  @media all and (min-width: 320px) and (max-width: 600px) {
    background: ${(props) => `url("/${props.bgImage}")`};
    background-position: center;
    height: 200px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media all and (min-width: 601px) and (max-width: 767px) {
    height: 400px;
    background: ${(props) => `url("/${props.bgImage}")`};
    background-position: center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    background: ${(props) => `url("/${props.bgImage}")`};
    background-position: center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
  }
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
  @media all and (min-width: 320px) and (max-width: 600px) {
    text-align: center;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    text-align: center;
  }
`;
const ProjectDescription = styled.div`
  margin-left: -100px;
  padding: 5px 20px;
  background: #112240;
  border-radius: 10px;
  width: 500px;
  p {
    text-align: center;
    color: #ccd6f6;
    line-height: 1.6;
  }
  @media all and (min-width: 320px) and (max-width: 600px) {
    margin: 0 5px;
    width: 100%;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    margin: 0 5px;
    width: 100%;
  }
`;
const ProjectTools = styled.div`
  ul {
    display: flex;
    justify-content: space-between;

    @media all and (min-width: 320px) and (max-width: 600px) {
      width: 100%;
      align-items: center;
      margin-left: -20px;
      li {
        margin: 0.2px;
        text-align: center;
      }
    }
  }
`;
const ProjectLinks = styled.div`
  text-align: right;
  color: #ccd6f6;

  Button {
    color: #fff;
    background: #09192f;
  }

  @media all and (min-width: 320px) and (max-width: 600px) {
    text-align: center;
  }
  @media all and (min-width: 601px) and (max-width: 768px) {
    text-align: center;
  }

  span {
    padding: 10px;
  }
`;
