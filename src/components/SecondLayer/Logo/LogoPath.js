import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import bat from '../../../assets/bat.jpg';

export const LogoPath = ({logo}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const config = useVideoConfig();

	const LogoPathPostion = spring({
		from: -500,
		to: 0,
		frame,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '13rem',
			}}
		>
			<div>
				<svg
					ViewBox={`0 0 ${config.width} ${config.height}`}
					width="500px"
					height="350px"
					transform={`translate(0, ${LogoPathPostion})`}
				>
					<image xlinkHref={bat} width="500px" height="300px" />
				</svg>
			</div>
		</AbsoluteFill>
	);
};
