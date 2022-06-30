import {OffthreadVideo, useVideoConfig, Video} from 'remotion';

import React from 'react';

const FithLayerMain = ({video}) => {
	const {width, height} = useVideoConfig();
	return (
		<>
			<OffthreadVideo src={video} width={width} height={height} />
		</>
	);
};

export default FithLayerMain;
