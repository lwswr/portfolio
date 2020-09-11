import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { useSpring, animated as a } from "react-spring";

export const Home = (props: RouteComponentProps) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });
  return (
    <div>
      <a.h1 style={fade}>Home</a.h1>
      <a.img
        src="https://www.telegraph.co.uk/content/dam/Travel/2019/September/nz.jpg?imwidth=1400"
        alt="#"
        style={fade}
      />
    </div>
  );
};
