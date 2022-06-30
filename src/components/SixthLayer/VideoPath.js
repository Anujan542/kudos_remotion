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
		// 	alignItems: 'end',
		// 	justifyContent: 'start',
		// 	marginTop: '10rem',
		// }}
		>
			<div className="bounce-in-bottom">
				{/* <Video
					width="1200px"
					height="750px"
					src={video}
					// Style={{border: '10px solid white'}}
				/> */}
				<OffthreadVideo
					autoPlay
					className="slide-top-remotion"
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
