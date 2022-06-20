import React from 'react';
import {Audio, useCurrentFrame} from 'remotion';
import audio from '../../assets/audio.mp3';

export const Music = () => {
	const frame = useCurrentFrame();
	return (
		<>
			<Audio src={audio} volume={0.1} muted={frame >= 880 && frame <= 1800} />
		</>
	);
};
