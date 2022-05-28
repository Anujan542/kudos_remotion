import {shade, tint} from 'polished';
import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
// Import {getReadableColor} from './readable-color';
// import {defaultStyles} from './styles';

export const Palette = ({color}) => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily:
					"--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
				fontWeight: 'bold',
				fontSize: 100,
				lineHeight: 1.1,
			}}
		>
			<div
				style={{
					display: 'flex',
					flex: 1,
					flexDirection: 'row',
					width: width * 0.6,
					height: height * 0.6,
					position: 'absolute',
					transform: `scale(${scale})`,
				}}
			>
				{[
					tint(0.4, color),
					tint(0.2, color),
					color,
					shade(0.2, color),
					shade(0.4, color),
				].map((s, i) => {
					const progress = spring({
						frame: frame - i * 4,
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
								padding: 15,
								height: progress * 100 + '%',
								border: `3px solid ${s}`,
								color,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
