import React from 'react';
import {AbsoluteFill, Img} from 'remotion';

import Logo1 from '../../assets/img_3.png';
import Logo2 from '../../assets/img_4.png';

const Logos = () => {
	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '50rem',
				}}
			>
				<div>
					<Img
						style={{
							height: '200px',
							width: '200px',
							filter: 'brightness(0) invert(1)',
						}}
						src={Logo2}
					/>
					{/* brightness(0.9) invert(.7) sepia(.5) hue-rotate(100deg) saturate(200%) */}
					<Img
						style={{
							textAlign: 'center',
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
