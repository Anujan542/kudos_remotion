/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import video from '../../assets/coach_video.mp4';

import './video.css';

export const VideoPath = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const config = useVideoConfig();

	const LogoPathPostion = spring({
		from: 200,
		to: 0,
		frame,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'end',
				justifyContent: 'start',
				marginTop: '10rem',
			}}
		>
			<div className="bounce-in-bottom">
				<Video width="1200px" height="750px" src={video} />
				{/* <svg
					ViewBox={`0 0 ${config.width} ${config.height}`}
					width="1200px"
					height="750px"
					transform={`translate(0, ${LogoPathPostion})`}
				>
					<image
						xlinkHref={video}
						width="100%"
						height="100%"
						style={{border: '5px solid white'}}
					/>
				</svg> */}
			</div>
		</AbsoluteFill>
	);
};
