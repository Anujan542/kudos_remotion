import React from "react";
import { AbsoluteFill, Img } from "remotion";

import background from "../../assets/img_5.jpg";
import Logos from "./Logos";

const ThirdMain = ({ video, Logo1, Logo2 }) => {
  return (
    <>
      <Img
        style={{
          filter: "grayscale(100%)",
          position: "relative",
        }}
        src={video}
      />
      <Logos Logo1={Logo1} Logo2={Logo2} />
    </>
  );
};

export default ThirdMain;
