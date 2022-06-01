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
		<AbsoluteFill>
			<video loop="true" src={video} />
		</AbsoluteFill>
	);
};

export default SixthLayer;
