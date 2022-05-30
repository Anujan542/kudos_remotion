import {AbsoluteFill} from 'remotion';
import {spring} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';

const FourthLayerEffect = ({color}) => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	// 	Const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

	const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

	const opacity = interpolate(frame, [1, 50], [1, 50]);

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

export default FourthLayerEffect;
