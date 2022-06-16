import React from 'react';
import {AbsoluteFill, Img, Video} from 'remotion';

import {LogoPath} from './Logo/LogoPath';

const Main = ({baseBall, logo}) => {
	return (
		<AbsoluteFill>
			<Video src={baseBall} />
			<LogoPath logo={logo} />
		</AbsoluteFill>
	);
};

export default Main;
