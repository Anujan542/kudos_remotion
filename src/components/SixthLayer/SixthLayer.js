import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill, Video} from 'remotion';
import video from '../../assets/vid_5.mp4';

const SixthLayer = () => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();
	const transitionProgress = spring({
		fps,
		frame: frame - 80,
		config: {
			damping: 200,
		},
	});

	return (
		<>
			<div style={{position: 'relative'}}>
				<Video
					loop
					src={video}
					style={{display: 'block', width: '100%', height: 'auto'}}
				/>
				<div
					style={{
						position: 'absolute',
						top: '0',
						bottom: '0',
						left: '0',
						right: '0',
						height: ' 100%',
						width: ' 100%',
						backgroundColor: 'red',
						opacity: 0.5,
					}}
				>
					<div />
				</div>
			</div>
		</>
	);
};

export default SixthLayer;
