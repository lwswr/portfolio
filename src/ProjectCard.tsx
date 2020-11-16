import * as React from "react";

export const ProjectCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={require(image + "")} alt="" height={300} width={600} />
    </div>
  );
};
