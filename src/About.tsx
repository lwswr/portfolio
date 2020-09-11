import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { useSpring, animated } from "react-spring";

export const About = (props: RouteComponentProps) => {
  const fade: Object = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });
  return (
    <div>
      <animated.h1 style={fade}>About</animated.h1>
      <animated.h3 style={fade}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </animated.h3>
    </div>
  );
};
