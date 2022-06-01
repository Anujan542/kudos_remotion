/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import {AbsoluteFill} from 'remotion';

import Logo from './Logo';

const FirstLayer = ({image}) => {
	return (
		<AbsoluteFill>
			<div>
				<img
					style={{
						filter: 'grayscale(100%)',
						opacity: '1',
						position: 'absolute',
					}}
					src={image}
				/>
			</div>
			<div>
				<Logo />
			</div>
		</AbsoluteFill>
	);
};

export default FirstLayer;
