import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Effect4 = ({color}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

	return (
		<>
			<div
				style={{
					display: 'flex',
					flex: 1,
					justifyContent: 'start',
					alignItems: 'center',
					marginTop: '-12.5rem',
				}}
			>
				<div
					style={{
						display: 'flex',
						flex: 1,

						transform: `scale(${scale})`,
					}}
				>
					{[color].map((s, i) => {
						const progress = spring({
							frame,
							fps,
							config: {
								damping: 200,
							},
						});
						return (
							<div
								key={s}
								style={{
									backgroundColor: s,
									flex: 1,
									opacity: progress,
									// Padding: 15,
									//	Height: progress * 100 + '%',
									border: `2px solid ${s}`,
									color,
								}}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
