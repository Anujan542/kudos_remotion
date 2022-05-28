import {interpolate} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import {AbsoluteFill, spring} from 'remotion';

const Date = ({titleText}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = (i) =>
		spring({
			fps,
			frame: frame - 3 * i,
			config: {
				damping: 100,
				overshootClamping: true,
			},
		});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '53rem',
				//	MarginLeft: '22.5rem',
			}}
		>
			<h1
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: 'bold',
					fontSize: 100,
					textAlign: 'center',
					position: 'absolute',
					// Bottom,
					width: '100%',
				}}
			>
				{titleText.split('').map((t, i) => {
					return (
						<span
							key={t + i}
							style={{
								fontWeight: 'bold',
								color: 'white',
								fontSize: Math.round(
									interpolate(progress(i), [0, 2], [0, 200], {
										extrapolateRight: 'clamp',
									})
								),
							}}
						>
							{t}
						</span>
					);
				})}
			</h1>
		</AbsoluteFill>
	);
};

export default Date;
