import { AbsoluteFill, interpolate, Img, staticFile } from "remotion";
import { useCurrentFrame } from "remotion";
import React from "react";

const Logo = ({ logo }) => {
  const frame = useCurrentFrame(); // 10

  const opacity = interpolate(frame, [0, 100], [0, 4]);
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        transform: `scale(${opacity})`,
      }}
    >
      {/* <div
        style={{
          height: "10%",
          width: "10%",
          borderRadius: "50%",
          transform: `scale(${opacity})`,
        }}
      > */}
      <Img src={logo} />
      {/* </div> */}
    </AbsoluteFill>
  );
};

export default Logo;
