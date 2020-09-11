import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { useSpring, animated } from "react-spring";

export const Home = (props: RouteComponentProps) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });
  return (
    <div>
      <animated.div style={fade}>Home</animated.div>
    </div>
  );
};
