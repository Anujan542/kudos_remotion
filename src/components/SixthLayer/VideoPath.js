/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import {
	AbsoluteFill,
	OffthreadVideo,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import './video.css';

export const VideoPath = ({video}) => {
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
		// Style={{
		// 	alignItems: 'start',
		// 	justifyContent: 'center',
		// 	//		MarginTop: '10rem',
		// }}
		>
			<OffthreadVideo
				autoPlay
				className="bounce-in-bottom"
				src={video}
				// Width="1200px"
				// height="750px"
				style={{
					maxHeight: '100%',
					maxWidth: '30%',
					marginLeft: '55%',
					marginTop: '10%',
					border: '5px solid white',
				}}
			/>
		</AbsoluteFill>
	);
};
