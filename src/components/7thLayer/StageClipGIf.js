import React from 'react';
import {AbsoluteFill, Img, Video} from 'remotion';
import gif from '../../assets/vid_7.gif';

const StageClipGIf = () => {
	return (
		<AbsoluteFill>
			<Img src={gif} alt="gif" />
		</AbsoluteFill>
	);
};

export default StageClipGIf;
