import React from 'react';
import {Video} from 'remotion';

import Title from './Title';

const ForthMain = ({video, logo, sideImage, Logo1, Logo2}) => {
	return (
		<>
			<Video
				playbackRate={0.3}
				src={video}
				style={{filter: 'grayscale(80%)', position: 'relative'}}
			/>
			<Title logo={logo} sideImage={sideImage} Logo1={Logo1} Logo2={Logo2} />
		</>
	);
};

export default ForthMain;
