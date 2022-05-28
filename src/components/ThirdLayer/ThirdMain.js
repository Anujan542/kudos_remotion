import React from 'react';
import {Img} from 'remotion';

import b from '../../assets/img_5.jpg';

const ThirdMain = () => {
	return (
		<>
			<Img
				style={{
					filter: 'grayscale(100%)',
				}}
				src={b}
			/>
		</>
	);
};

export default ThirdMain;
