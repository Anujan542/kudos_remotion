import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

const Logo = () => {
	return (
		<>
			<div>
				<Img
					style={{
						Position: 'absolute',
						left: '40px',
						top: '40px',
						zIndex: -1,
					}}
					src={staticFile('bat.jpg')}
				/>
			</div>
		</>
	);
};

export default Logo;
