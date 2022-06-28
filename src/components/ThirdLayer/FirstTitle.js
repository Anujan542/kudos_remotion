import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const FirstTitle = ({titleText}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / 1);
	const textToShow = titleText.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				//	MarginTop: '32rem',
			}}
		>
			<h6
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					FontWeight: 'bold',
					fontSize: '50px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				{textToShow}
			</h6>
		</AbsoluteFill>
	);
};

export default FirstTitle;
