/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import bat from '../../../../public/bat.jpg';

export const LogoPath = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const config = useVideoConfig();

	const LogoPathPostion = spring({
		from: -200,
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
				marginTop: '5rem',
			}}
		>
			<div>
				<svg
					ViewBox={`0 0 ${config.width} ${config.height}`}
					width="500px"
					height="300px"
					transform={`translate(0, ${LogoPathPostion})`}
				>
					<image xlinkHref={bat} width="500px" height="300px" />
				</svg>
			</div>
		</AbsoluteFill>
	);
};
