import {AbsoluteFill} from 'remotion';
import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

const UnderLine = ({secondaryColor}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const config = useVideoConfig();

	const underscoreWidthRight = spring({
		from: 0,
		to: 2000,
		frame,
		fps,
		config: {mass: 10, damping: 500, stiffness: 300},
	});

	const underscoreWidthLeft = spring({
		from: 0,
		to: -1600,
		frame,
		fps,
		config: {mass: 10, damping: 500, stiffness: 300},
	});

	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '42rem',
					marginLeft: '42rem',
				}}
			>
				<svg
					viewBox={`0 0 ${config.width} ${config.height}`}
					width="100%"
					height="500px"
					//	Transform="translate(0, 0)"
				>
					<g id="g10">
						<path
							transform="scale(0.3)"
							style={{
								fill: `${secondaryColor}`,
								//		FillOpacity: 0.5,
								fillRule: 'nonzero',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${underscoreWidthRight} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '42rem',
					marginLeft: '50rem',
				}}
			>
				<svg
					viewBox={`0 0 ${config.width} ${config.height}`}
					width="100%"
					height="500px"
					//		Transform="translate(100, 0)"
				>
					<g id="g10">
						<path
							transform="scale(0.3)"
							style={{
								fill: `${secondaryColor}`,
								//	FillOpacity: 0.5,
								fillRule: 'revert',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${underscoreWidthLeft} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>
		</>
	);
};

export default UnderLine;
