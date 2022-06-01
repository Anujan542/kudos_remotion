import React from 'react';
import {AbsoluteFill} from 'remotion';
import Typewriter from 'typewriter-effect';

// Import '../Title/Title.css';

const LastTitle = () => {
	return (
		<AbsoluteFill
			className="typewriter"
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
				<Typewriter
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
				/>
			</h1>
		</AbsoluteFill>
	);
};

export default LastTitle;
