import React from 'react';
import {AbsoluteFill} from 'remotion';

import '../Title/Title.css';

const SubTitle = ({titleText}) => {
	return (
		<AbsoluteFill
			className="typewriter"
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '44rem',
			}}
		>
			<h1
				style={{
					fontSize: '100px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				{titleText}
			</h1>
		</AbsoluteFill>
	);
};

export default SubTitle;
