import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

const Logos = ({Logo1, Logo2}) => {
	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'end',
					marginTop: '-2rem',
				}}
			>
				<div>
					<Img
						style={{
							height: '100px',
							width: '100px',
							filter: 'brightness(0) invert(1)',
						}}
						src={Logo2}
					/>
					<Img
						style={{
							height: '100px',
							width: '100px',
							filter: 'brightness(0) invert(1)',
						}}
						src={Logo1}
					/>
				</div>
			</AbsoluteFill>
		</>
	);
};

export default Logos;
