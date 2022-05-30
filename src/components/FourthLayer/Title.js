import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {Img} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import back from '../../assets/img_9.png';
import bat from '../../assets/bat.jpg';
import Logos from '../ThirdLayer/Logos';

import './Fade.css';

const Title = () => {
	return (
		<>
			<AbsoluteFill
				className="text-focus-in"
				style={{
					alignItems: 'start',
					justifyContent: 'start',
					marginLeft: '-20rem',
				}}
			>
				<div>
					<Img
						style={{filter: 'grayscale(100%)', opacity: '1.0'}}
						width="100%"
						height="70%"
						src={back}
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
					<Img width="90%" height="15%" src={bat} />

					<Logos />
				</div>
			</AbsoluteFill>
		</>
	);
};

export default Title;
