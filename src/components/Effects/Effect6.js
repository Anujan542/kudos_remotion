import {AbsoluteFill} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

const Effect6 = ({color}) => {
	const frame = useCurrentFrame(); // 10
	const opacity = interpolate(frame, [0, 80], [2, 5]);
	return (
		<>
			<AbsoluteFill style={{justifyContent: 'end', alignItems: 'start'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '100%',
						width: '30%',
						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill style={{justifyContent: 'start', alignItems: 'end'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '100%',
						width: '30%',
						transform: `scale(${opacity})`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};

export default Effect6;
