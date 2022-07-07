/* eslint-disable @remotion/volume-callback */
import React from 'react';
import {Audio, useCurrentFrame} from 'remotion';
import audio from '../../assets/audio.mp3';

export const Music = () => {
	const frame = useCurrentFrame();
	return (
		<>
			<Audio
				src={audio}
				volume={
					frame >= 465 && frame <= 800
						? 0.1
						: frame >= 1123 && frame <= 2113
						? 0.1
						: 1
				}
				// Muted={
				// 	(frame >= 465 && frame <= 760) || (frame >= 1123 && frame <= 2113)
				// }
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
