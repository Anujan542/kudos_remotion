import React from 'react';
import {AbsoluteFill, Video} from 'remotion';
import back from '../../assets/vid_2.mp4';
import Title from './Title';

const ForthMain = () => {
	return (
		<>
			<Video
				playbackRate={0.5}
				src={back}
				style={{filter: 'grayscale(80%)', position: 'relative'}}
			/>
			<Title />
		</>
	);
};

export default ForthMain;
