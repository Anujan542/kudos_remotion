// Import React from 'react';
// import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

// const FirstLayerEffect2 = ({color}) => {
// 	const frame = useCurrentFrame(); // 10
// 	const opacity = interpolate(frame, [60, 200], [0, 4]);
// 	return (
// 		<>
// 			<AbsoluteFill style={{justifyContent: 'end', alignItems: 'start'}}>
// 				<div
// 					style={{
// 						backgroundColor: `${color}`,
// 						height: '100%',
// 						width: '30%',
// 						transform: `scale(${opacity})`,
// 					}}
// 				/>
// 			</AbsoluteFill>
// 			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
// 				<div
// 					style={{
// 						backgroundColor: `${color}`,
// 						height: '100%',
// 						width: '15%',
// 						transform: `scale(${opacity})`,
// 					}}
// 				/>
// 			</AbsoluteFill>
// 			<AbsoluteFill style={{justifyContent: 'start', alignItems: 'end'}}>
// 				<div
// 					style={{
// 						backgroundColor: `${color}`,
// 						height: '100%',
// 						width: '30%',
// 						transform: `scale(${opacity})`,
// 					}}
// 				/>
// 			</AbsoluteFill>
// 		</>
// 	);
// };

// export default FirstLayerEffect2;

// I
import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const FirstLayerEffect2 = ({color}) => {
	const LINE_X_RADIUS = 150;

	const {fps, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const rawProgress = spring({
		fps,
		frame: frame - 50,
		config: {
			damping: 200,
		},
	});
	const progress = rawProgress + frame / 1000 - 0.1;
	const lineProgress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const lineExplode = spring({
		fps,
		frame: frame - 10,
		config: {
			damping: 200,
		},
	});
	const LINE_Y_RADIUS = interpolate(lineExplode, [0, 1], [500, height]);

	const currentStrokeWidth = interpolate(
		lineExplode,
		[0, 1],
		[6, width + LINE_X_RADIUS]
	);

	const lineX =
		Math.sin((progress * Math.PI) / 2 + Math.PI / 4) *
			LINE_X_RADIUS *
			lineProgress +
		width / 2;

	const lineY =
		Math.cos((progress * Math.PI) / 2 + Math.PI / 4) *
			LINE_Y_RADIUS *
			lineProgress +
		height / 2;

	const line2X =
		Math.sin((progress * Math.PI) / 2 + Math.PI + Math.PI / 4) *
			LINE_X_RADIUS *
			lineProgress +
		width / 2;

	const line2Y =
		Math.cos((progress * Math.PI) / 2 + Math.PI + Math.PI / 4) *
			LINE_Y_RADIUS *
			lineProgress +
		height / 2;

	return (
		<AbsoluteFill>
			<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
				<path
					d={`
            M ${lineX - currentStrokeWidth / 2} ${lineY}
            L ${line2X - currentStrokeWidth / 2} ${line2Y}
            L ${line2X + currentStrokeWidth / 2} ${line2Y}
            L ${lineX + currentStrokeWidth / 2} ${lineY}
            `}
					fill={`${color}`}
				/>
			</svg>
		</AbsoluteFill>
	);
};

export const FirstLayerEffect21 = ({color}) => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const translateX1 = interpolate(progress, [0, 1], [0, -width / 2]);
	const translateX2 = interpolate(progress, [0, 1], [0, width / 2]);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<div
					style={{
						flex: 1,
						backgroundColor: `${color}`,
						transform: `translateX(${translateX1}px)`,
					}}
				/>
				<div
					style={{
						flex: 1,
						backgroundColor: `${color}`,
						transform: `translateX(${translateX2}px)`,
					}}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
