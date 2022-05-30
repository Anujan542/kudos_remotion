import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import background from '../../assets/img_5.jpg';
import Logos from './Logos';

const ThirdMain = () => {
	return (
		<>
			<Img
				style={{
					filter: 'grayscale(100%)',
					position: 'relative',
				}}
				src={background}
			/>
			<Logos />
		</>
	);
};

export default ThirdMain;
