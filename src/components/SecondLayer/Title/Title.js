import React from 'react';
import {AbsoluteFill} from 'remotion';

import './Title.css';

const Title = ({titleText}) => {
	return (
		<AbsoluteFill
			className="typewriter"
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '35rem',
			}}
		>
			<h1
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					FontWeight: 'bold',
					fontSize: '120px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				{titleText}
			</h1>
		</AbsoluteFill>
	);
};

export default Title;
