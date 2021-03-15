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
        title={"GEOJSON FEATURES DATA"}
        description={geoJsonFeatureDes}
        image={process.env.PUBLIC_URL + "/images/geojsonfeature1.png"}
        githubURL={"https://github.com/lwswr/geojson-feature"}
        demoURL={"https://lwswr.github.io/geojson-feature/"}
      />
      <ProjectCard
        title={"ECOMMERCE APP"}
        description={ecommerceDes}
        image={process.env.PUBLIC_URL + "/images/ecommerce1.png"}
        githubURL={"https://github.com/lwswr/ecommerce"}
        demoURL={"https://lwswr.github.io/ecommerce/"}
      />
      <ProjectCard
        title={"JOB SEARCH APP"}
        description={jobSearchDes}
        image={process.env.PUBLIC_URL + "/images/jobsearch1.png"}
        githubURL={"https://github.com/lwswr/job-search"}
        demoURL={"https://lwswr.github.io/job-search/"}
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

const ecommerceDes: string =
  "Single page application emmulating an eccomerce site with a product list and basket interface. Coded using React, Redux & Typescript, data requests fetched using axios from fakeapi.com. The app is styled using styled components.";

const geoJsonFeatureDes: string =
  "Single page application that displays geojson features as polygons on a map with scale and relativity. Mapped using pigeon-maps react library. The front end technologies used are React, Redux & Typescript. The data is plotted using svg polylines. Data for the features is fetched from the OpenStreetMap API using axios HTTP client. Styled-components is used for styling";

const jobSearchDes: string =
  "Single page application that displays coordinates of jobs fetched from the adzuna API mapped using the pigeon-maps library. The front end technologies used are React, Redux & Typescript. Styled-components is used for styling";
