import React from "react";
import { AbsoluteFill } from "remotion";

import "../SecondLayer/Title/Title.css";

const SecondTitle = ({ titleText }) => {
  return (
    <AbsoluteFill
      className="typewriter"
      style={{
        alignItems: "center",
        justifyContent: "start",
        marginTop: "8rem",
      }}
    >
      <h2
        style={{
          fontFamily: "SF Pro Text, Helvetica, Arial",
          FontWeight: "bold",
          fontSize: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        {titleText}
      </h2>
    </AbsoluteFill>
  );
};

export default SecondTitle;
