import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const FirstLayerEffect = ({color}) => {
	const frame = useCurrentFrame(); // 10
	const opacity = interpolate(frame, [0, 80], [0.5, 5]);
	return (
		<>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '50%',
						width: '200%',

						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};

export default FirstLayerEffect;
