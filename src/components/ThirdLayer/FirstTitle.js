import React from "react";
import { AbsoluteFill } from "remotion";

import "../SecondLayer/Title/Title.css";

const FirstTitle = ({ titleText }) => {
  return (
    <AbsoluteFill
      className="typewriter"
      style={{
        alignItems: "center",
        justifyContent: "start",
        //	MarginTop: '32rem',
      }}
    >
      <h6
        style={{
          fontFamily: "SF Pro Text, Helvetica, Arial",
          FontWeight: "bold",
          fontSize: "50px",
          textAlign: "center",
          color: "white",
        }}
      >
        {titleText}
      </h6>
    </AbsoluteFill>
  );
};

export default FirstTitle;
