import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      <ProjectCard
        title={"Covid Tracker"}
        description={"Covid Tracker"}
        image={"./images/covid-tracker1.png"}
      />
      <ProjectCard
        title={"Covid Tracker"}
        description={"Covid Tracker"}
        image={"./images/covid-tracker1.png"}
      />
      <ProjectCard
        title={"Covid Tracker"}
        description={"Covid Tracker"}
        image={"./images/covid-tracker1.png"}
      />
    </ProjectsContainer>
  );
};
