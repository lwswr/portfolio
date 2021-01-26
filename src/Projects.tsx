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
        title={"ECOMMERCE APP"}
        description={ecommerceDes}
        image={process.env.PUBLIC_URL + "/images/ecommerce1.png"}
        githubURL={"https://github.com/lwswr/ecommerce"}
        demoURL={"https://lwswr.github.io/ecommerce/"}
      />
      <ProjectCard
        title={"COVID TRACKER"}
        description={covidTrackerDes}
        image={process.env.PUBLIC_URL + "/images/covidtracker1.png"}
        githubURL={"https://github.com/lwswr/covid-tracker"}
        demoURL={"https://lwswr.github.io/covid-tracker/"}
      />
      <ProjectCard
        title={"WEATHER APPLIACTION"}
        description={weatherAppDes}
        image={process.env.PUBLIC_URL + "/images/weatherapp.png"}
        githubURL={"https://github.com/lwswr/weather-app"}
        demoURL={"https://lwswr.github.io/weather-app/"}
      />
      <ProjectCard
        title={"MOVIE DATABASE"}
        description={movieDBDes}
        image={process.env.PUBLIC_URL + "/images/moviedb1.png"}
        githubURL={"https://github.com/lwswr/movie-db"}
        demoURL={"https://lwswr.github.io/movie-db/"}
      />
    </ProjectsContainer>
  );
};

const covidTrackerDes: string =
  "Single page application showing COVID-19 data for countries and displaying the information with tables and graphs. Technologies used for development: React, Typescript, Axios Promise based http client, covid19api.com API,  styled-components for styling, ChartJS for displaying a graph with a timeline.";

const weatherAppDes: string =
  "Single page application which allows the user to search different cities around the world. The app displays the data in an intuitive way and gives a 3 day forecast for that location. Technologies used for development: React, Typescript, Axios Promise based http client, OpenweatherAPI, styled-components for styling.";

const movieDBDes: string =
  "Single page application which displays a list of movies based on user input and allows the user to expand different movie tiles to access more information. React, Typescript, Axios Promise based http client, oMDB API, styled-components for styling.";

const ecommerceDes: string = "Single page application";
