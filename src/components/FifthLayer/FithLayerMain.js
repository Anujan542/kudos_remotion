import {useVideoConfig} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';
import play from '../../assets/vid_3.gif';
import {Gif} from '@remotion/gif';

const FithLayerMain = () => {
	const {width, height} = useVideoConfig();
	return (
		<>
			<Gif src={play} width={width} height={height} fit="fill" />
		</>
	);
};

export default FithLayerMain;
