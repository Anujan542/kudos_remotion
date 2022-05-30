import React from 'react';
import {AbsoluteFill} from 'remotion';

import '../SecondLayer/Title/Title.css';

const ThirdTitle = () => {
	return (
		<AbsoluteFill
			className="typewriter"
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: '7rem',
			}}
		>
			<span
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					//	FontWeight: 'bold',
					fontSize: '50px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				AND BSN SPORTS IN COLLABOATION WITH
				<br />
				NIKE FOR GOING ABOVE AND BEYOND.
			</span>
		</AbsoluteFill>
	);
};

export default ThirdTitle;
