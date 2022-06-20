import {useVideoConfig, Video} from 'remotion';

import React from 'react';

const FithLayerMain = ({video}) => {
	const {width, height} = useVideoConfig();
	return (
		<>
			<Video src={video} width={width} height={height} />
		</>
	);
};

export default FithLayerMain;
