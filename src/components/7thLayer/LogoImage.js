import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {LogoPath} from '../SecondLayer/Logo/LogoPath';

const LogoImage = ({image, logo}) => {
	return (
		<AbsoluteFill>
			<Img
				src={image}
				style={{
					filter: 'grayscale(100%)',
					opacity: '0.3',
					//	Position: 'fixed',
				}}
			/>
			<LogoPath logo={logo} />
		</AbsoluteFill>
	);
};

export default LogoImage;
