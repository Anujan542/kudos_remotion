import React from 'react';
import {Audio, useCurrentFrame} from 'remotion';
import audio from '../../assets/audio.mp3';

export const Music = () => {
	const frame = useCurrentFrame();
	return (
		<>
			<Audio
				src={audio}
				volume={0.1}
				muted={frame >= 618 && frame <= 797 && frame >= 880 && frame <= 1800}
				endAt={2600}
			/>
		</>
	);
};

export const EncourageMusic = ({audioVoice}) => {
	return (
		<>
			<Audio src={audioVoice} />
		</>
	);
};
