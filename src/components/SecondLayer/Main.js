import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import video from '../../assets/vid_8.gif';
import {LogoPath} from './Logo/LogoPath';

const Main = () => {
	return (
		<AbsoluteFill>
			<Img src={video} />
			<LogoPath />
		</AbsoluteFill>
	);
};

export default Main;
