import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const Title = ({titleText}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / 3);
	const textToShow = titleText.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '32rem',
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
				{textToShow}
			</h1>
		</AbsoluteFill>
	);
};

export default Title;
