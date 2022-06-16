import { Video } from "remotion";
import { useVideoConfig } from "remotion";
import React from "react";

export const SeventhMain = ({ video }) => {
  const { width, height } = useVideoConfig();
  return (
    <>
      <Video src={video} width={width} height={height} />
    </>
  );
};

export default SeventhMain;
