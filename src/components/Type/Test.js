import React from 'react';
import Typewriter from 'typewriter-effect';

export const Jumpbotron = ({text}) => {
	return (
		<>
			<Typewriter
				options={{
					strings: text,
					autoStart: true,
					cursor: '',
				}}
				onInit={(typewriter) => {
					typewriter.start().stop();
				}}
			/>
		</>
	);
};
