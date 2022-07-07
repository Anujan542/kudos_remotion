import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import Logo from './Logo';

const FirstLayer = ({image, logo}) => {
	return (
		<AbsoluteFill>
			<Img
				style={{
					filter: 'grayscale(100%)',
					opacity: '1',
					//  Position: "absolute",
				}}
				src={image}
			/>

			<Logo logo={logo} />
		</AbsoluteFill>
	);
};

export default FirstLayer;
