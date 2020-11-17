import * as React from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: relative;
  text-align: left;
  justify-content: left;
  font-family: "Lato", sans-serif;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 0px solid none;
  border-radius: 15px;
  :hover {
    div:nth-child(1) {
      opacity: 0;
    }
    div:nth-child(3) {
      opacity: 1;
    }
    img {
      color: grey;
      opacity: 0.5;
    }
    button {
      opacity: 1;
    }
  }
`;

const ProjectCardTitle = styled.div`
  position: absolute;
  opacity: 0.8;
  background: white;
  color: #202020;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  font-size: 50px;
  text-align: center;
  letter-spacing: 2px;
  width: inherit;
  transition: 0.2s ease-in;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 5px 10px -1px rgba(0, 0, 0, 0.06);
`;

const ProjectCardDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 75%;
  text-align: left;
  transition: 0.2s ease-in;
`;

const ProjectCardImage = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 15px;
`;

const DemoButton = styled.button`
  position: absolute;
  left: 65%;
  top: 70%;
  opacity: 0;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  transition: 0.2s;
  background: none;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  padding: 5px;
  :hover {
    background: white;
    border: solid 1px white;
    color: black;
  }
`;

const GitHubButton = styled.button`
  position: absolute;
  left: 25%;
  top: 70%;
  opacity: 0;
  font-family: "Lato", sans-serif;
  transition: all 0.5s;
  background: none;
  border: solid 1px white;
  color: white;
  font-size: 25px;
  border-radius: 30px;
  padding: 5px;
  :hover {
    background: white;
    border: solid 1px white;
    color: black;
  }
`;

const goToURLClicked = (url: string) => {
  window.open(url, "_blank");
};

export const ProjectCard = ({
  title,
  description,
  image,
  githubURL,
  demoURL,
}: {
  title: string;
  description: string;
  image: string;
  githubURL: string;
  demoURL: string;
}) => {
  return (
    <ProjectCardContainer>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardImage
        src={require(image + "")}
        alt=""
        height={300}
        width={600}
      />
      <ProjectCardDescription>{description}</ProjectCardDescription>
      <GitHubButton onClick={() => goToURLClicked(githubURL)}>
        GITHUB
      </GitHubButton>
      <DemoButton onClick={() => goToURLClicked(demoURL)}>DEMO</DemoButton>
    </ProjectCardContainer>
  );
};
