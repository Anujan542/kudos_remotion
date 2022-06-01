import {Img} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import play from '../../assets/vid_6.gif';

export const SeventhMain = () => {
	const {width, height} = useVideoConfig();
	return (
		<>
			<Img src={play} width={width} height={height} />
		</>
	);
};

export default SeventhMain;
