/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import video from '../../assets/vid_8.gif';
import {LogoPath} from './Logo/LogoPath';

const Main = () => {
	return (
		<div>
			<div>
				<img src={video} />
			</div>
			<div>
				<LogoPath />
			</div>
		</div>
	);
};

export default Main;
