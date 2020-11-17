import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
`;

export const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectCard
        title={"COVID TRACKER"}
        description={LoremIpsum}
        image={"./images/covid-tracker1.png"}
        githubURL={"https://github.com/lwswr/covid-tracker"}
        demoURL={"https://lwswr.github.io/covid-tracker/"}
      />
      <ProjectCard
        title={"WEATHER APPLIACTION"}
        description={LoremIpsum}
        image={"./images/weather-app.png"}
        githubURL={"https://github.com/lwswr/weather-app"}
        demoURL={"https://lwswr.github.io/weather-app/"}
      />
      <ProjectCard
        title={"MOVIE DATABASE"}
        description={LoremIpsum}
        image={"./images/movie-db1.png"}
        githubURL={"https://github.com/lwswr/movie-db"}
        demoURL={"https://lwswr.github.io/movie-db/"}
      />
    </ProjectsContainer>
  );
};

const LoremIpsum: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
