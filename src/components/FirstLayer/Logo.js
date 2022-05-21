import {AbsoluteFill, interpolate, Img, staticFile} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

const Logo = () => {
	const frame = useCurrentFrame(); // 10

	const opacity = interpolate(frame, [0, 100], [0, 4]);
	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<div
				style={{
					height: '100%',
					width: '100%',
					borderRadius: '50%',
					transform: `scale(${opacity})`,
				}}
			>
				<Img src={staticFile('bat.jpg')} />
			</div>
		</AbsoluteFill>
	);
};

export default Logo;
