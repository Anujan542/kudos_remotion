import {Img} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import Logos from '../ThirdLayer/Logos';

import './Fade.css';

const Title = ({logo, sideImage, Logo1, Logo2}) => {
	return (
		<>
			<AbsoluteFill
				className="text-focus-in"
				style={{
					alignItems: 'start',
					justifyContent: 'start',
					marginTop: '10rem',
				}}
			>
				<div>
					<Img
						style={{filter: 'grayscale(100%)', opacity: '1.0'}}
						// Width="100%"
						// height="70%"
						src={sideImage}
					/>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				className="text-focus-in"
				style={{
					alignItems: 'center',
					justifyContent: 'end',
					marginLeft: '25rem',
				}}
			>
				<div>
					<Img width="90%" height="15%" src={logo} />

					<Logos Logo1={Logo1} Logo2={Logo2} />
				</div>
			</AbsoluteFill>
		</>
	);
};

export default Title;
