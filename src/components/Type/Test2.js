import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import ThirdMain from '../ThirdLayer/ThirdMain';

import {TriangleEntrace} from './Test';

export const Split = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	return (
		<TriangleEntrace showMask={false} progress={entrance}>
			<AbsoluteFill style={{backgroundColor: 'red'}} />
		</TriangleEntrace>
	);
};
