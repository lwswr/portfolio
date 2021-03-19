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
  @media only screen and (max-device-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const ProjectCardTitle = styled.div`
  position: absolute;
  opacity: 0.8;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 2px;
  width: inherit;
  transition: 0.2s ease-in;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 5px 10px -1px rgba(0, 0, 0, 0.06);
  @media only screen and (max-device-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2) {
    font-size: 1.6rem;
  }
`;

const ProjectCardDescription = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 90%;
  text-align: left;
  transition: 0.2s ease-in;
  color: white;
  @media only screen and (max-device-width: 768px) {
    top: 30%;
    font-size: 0.65rem;
    width: 90%;
  }
  @media only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2) {
    font-size: 0.7rem;
  }
`;

const ProjectCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 5px 10px -1px rgba(0, 0, 0, 0.06);
`;

const ButtonOne = styled.button`
  position: absolute;
  left: 10%;
  top: 70%;
  opacity: 0;
  font-family: "Lato", sans-serif;
  transition: all 0.5s;
  background: none;
  border: solid 1px white;
  color: white;
  font-size: 2rem;
  border-radius: 2rem;
  padding: 0.5rem;
  :hover {
    background: white;
    border: solid 1px white;
    color: black;
  }
  @media only screen and (max-device-width: 768px) {
    left: 20%;
    font-size: 1rem;
  }
  @media only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2) {
    font-size: 1rem;
  }
`;

const ButtonTwo = styled.button`
  position: absolute;
  left: 75%;
  top: 70%;
  opacity: 0;
  font-family: "Lato", sans-serif;
  transition: all 0.5s;
  background: none;
  border: solid 1px white;
  color: white;
  font-size: 2rem;
  border-radius: 2rem;
  padding: 0.5rem;
  :hover {
    background: white;
    border: solid 1px white;
    color: black;
  }
  @media only screen and (max-device-width: 768px) {
    left: 60%;
    font-size: 1rem;
  }
  @media only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2) {
    font-size: 1rem;
  }
`;

const ButtonBank = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      <ProjectCardImage src={image} alt="" height={300} width={600} />
      <ProjectCardDescription>{description}</ProjectCardDescription>
      <ButtonBank>
        <ButtonOne onClick={() => goToURLClicked(githubURL)}>GITHUB</ButtonOne>
        <ButtonTwo onClick={() => goToURLClicked(demoURL)}>DEMO</ButtonTwo>
      </ButtonBank>
    </ProjectCardContainer>
  );
};
