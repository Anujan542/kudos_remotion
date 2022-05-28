/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import {AbsoluteFill} from 'remotion';
import b from '../../../public/img_8.jpg';
import Logo from './Logo';

const FirstLayer = () => {
	return (
		<AbsoluteFill>
			<div>
				<img
					style={{
						filter: 'grayscale(100%)',
						opacity: '1',
						position: 'absolute',
					}}
					src={b}
				/>
			</div>
			<div>
				<Logo />
			</div>
		</AbsoluteFill>
	);
};

export default FirstLayer;
