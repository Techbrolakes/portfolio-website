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
        title="Boi-Unilag"
        desc="I built this website for my University (UNIVERSITY OF LAGOS) incubation hub."
        desc2="The incubation hub is a place where we students come with our innovative ideas and all the available resources we need to be sucessful are catered for. Appointments are booked on the website, The Incubation hub itself was built by the university of lagos and BOI (Bank Of Industry)"
        backgroundImg="boi.png"
        list1="Hammer.js"
        list2="JQuery"
        list3="Bookly Api"
        list4="Php"
        websiteLink="https://boi-unilag.com"
      />

      <Work
        title="Movie Website"
        desc="A react application which fetches data from a movie Api and dynamically renders the data in a responsive and beautiful web UI"
        desc2=""
        backgroundImg="movie.png"
        list1="Vs Code"
        list2="React"
        list3="Typescript"
        list4="The Movie DB"
        websiteLink="https://competent-fermi-0457c4.netlify.app/"
      />
      <Work
        title="Landing-Page Design"
        desc="A simple website built designed on figma and then translated into code"
        desc2="The website was designed with the latest design principles"
        backgroundImg="modern-ui.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
        websiteLink="https://modern-ui-ux.vercel.app/ "
      />
      <Work
        title="Netflix-Clone"
        desc="This Website was built in a bid to clone the official"
        desc2="Netflix Homepage , Just wanted to my frontend skills and i love the way the website came out"
        backgroundImg="netflix2.png"
        list1="VS CODE"
        list2="HTML"
        list3="CSS"
        list4="JAVASCRIPT"
        websiteLink="https://netflix-indol.vercel.app/"
      />
      <Work
        title="My Portfolio Website"
        desc="My Modern portfolio website built with react js."
        desc2="At its most basic form, a portfolio website provides professional information about an individual or a company and presents a showcase of their work"
        backgroundImg="portfolio.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
        websiteLink="https://lekandar.vercel.app/"
      />

      <Work
        title="Lakeside GameApp"
        desc="A react application which fetches data from a Game Api and dynamically renders the best free games easily available for download on pc in a responsive and beautiful web UI"
        desc2=""
        backgroundImg="game.png"
        list1="Vs Code"
        list2="React"
        list3="Vercel"
        list4="Redux"
        websiteLink="https://game-website-three.vercel.app/"
      />
      <Work
        title="Admin-Template"
        desc="An admin Template which can be configured to work with a full mern-stack application"
        desc2=""
        backgroundImg="admin.png"
        list1="Vs Code"
        list2="React"
        list3="Styled Components"
        list4="Vercel"
        websiteLink="https://react-admindashboard.vercel.app/"
      />

      <ProjectShowHide>
        <Work
          title="Admin-Template"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          desc2="when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          backgroundImg="admin.png"
          list1="Vs Code"
          list2="React"
          list3="Styled Components"
          list4="Vercel"
        />
      </ProjectShowHide>
      {/* <ProjectButton>
        <Button variant="contained" size="large">
          Show More
        </Button>
      </ProjectButton> */}
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
