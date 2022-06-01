import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
// Import {getReadableColor} from './readable-color';
// import {defaultStyles} from './styles';

export const Palette = ({color}) => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	// 	Const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

	const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

	const opacity = interpolate(frame, [1, 10], [0, 9]);

	return (
		<>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '10%',
						width: '100%',
						transform: `scale(${opacity})`,
						//	MarginBottom: '15rem',
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
