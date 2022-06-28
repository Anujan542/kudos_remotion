import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const SubTitle = ({titleText}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / 3);
	const textToShow = titleText.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginTop: '50rem',
			}}
		>
			<h1
				style={{
					fontSize: '100px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				{textToShow}
			</h1>
		</AbsoluteFill>
	);
};

export default SubTitle;
