import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Palette = ({color}) => {
	const frame = useCurrentFrame();

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
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
