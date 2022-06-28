import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const ThirdTitle = () => {
	const frame = useCurrentFrame();
	const text1 = 'AND BSN SPORTS IN COLLABOATION WITH';
	const text2 = 'NIKE FOR GOING ABOVE AND BEYOND.';
	const charsShown = Math.floor(frame / 1);
	const textToShow1 = text1.slice(0, charsShown);
	const textToShow2 = text2.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: '4rem',
			}}
		>
			<h6
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					//	FontWeight: 'bold',
					fontSize: '35px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				{textToShow1}
				<br />
				{textToShow2}
			</h6>
		</AbsoluteFill>
	);
};

export default ThirdTitle;
