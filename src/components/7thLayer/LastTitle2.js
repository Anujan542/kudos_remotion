import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const LastTitle2 = () => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / 3);
	const titleText = 'RESPECT.';
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
				{/* <Typewriter
					options={{
						strings: [
							'TEAMWORK.',
							'RESPECT.',
							'ENJOYMENT.',
							'DISCIPLINE.',
							'SPORTSMANSHIP.',
						],
						cursor: '',
						autoStart: true,
						loop: true,
					}}
				/> */}
			</h1>
		</AbsoluteFill>
	);
};

export default LastTitle2;
