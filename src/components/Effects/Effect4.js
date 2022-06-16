import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
// Import {getReadableColor} from './readable-color';
// import {defaultStyles} from './styles';

export const Effect4 = ({ color }) => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // 	Const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

  const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

  const opacity = interpolate(frame, [1, 30], [0, 9]);

  return (
    <>
      {/* <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '10%',
						width: '100%',
						transform: `scale(${opacity})`,
						//	MarginBottom: '15rem',
					}}
				/>
			</AbsoluteFill> */}
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "start",
          alignItems: "center",
          marginTop: "-12.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            //	FlexDirection: 'i',
            // Width: width * 0.6,
            // height: height * 0.6,
            //		position: 'absolute',
            transform: `scale(${scale})`,
          }}
        >
          {[
            // Tint(0.4, color),
            // tint(0.2, color),
            color,
            // Shade(0.2, color),
            // shade(0.4, color),
          ].map((s, i) => {
            const progress = spring({
              frame,
              fps,
              config: {
                damping: 200,
              },
            });
            return (
              <div
                key={s}
                style={{
                  backgroundColor: s,
                  flex: 1,
                  opacity: progress,
                  // Padding: 15,
                  //	Height: progress * 100 + '%',
                  border: `2px solid ${s}`,
                  color,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
