import {Img, useVideoConfig} from 'remotion';

import React from 'react';
import play from '../../assets/vid_3.gif';

const FithLayerMain = () => {
	const {width, height} = useVideoConfig();
	return (
		<>
			<Img src={play} width={width} height={height} />
		</>
	);
};

export default FithLayerMain;
