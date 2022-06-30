import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, Video} from 'remotion';

import {LogoPath} from './Logo/LogoPath';

const Main = ({baseBall, logo}) => {
	return (
		<AbsoluteFill>
			<OffthreadVideo src={baseBall} />
			<LogoPath logo={logo} />
		</AbsoluteFill>
	);
};

export default Main;
