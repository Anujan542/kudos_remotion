import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const SecondTitle = ({titleText}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / 1);
	const textToShow = titleText.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '8rem',
			}}
		>
			<h2
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					FontWeight: 'bold',
					fontSize: '100px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				{textToShow}
			</h2>
		</AbsoluteFill>
	);
};

export default SecondTitle;
