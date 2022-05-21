import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const AfterLogo2 = ({color}) => {
	const frame = useCurrentFrame(); // 10
	const opacity = interpolate(frame, [60, 200], [0, 4]);
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
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<div
					style={{
						backgroundColor: `${color}`,
						height: '100%',
						width: '10%',
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
