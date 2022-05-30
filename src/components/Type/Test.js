import {AbsoluteFill} from 'remotion';
import React, {useState} from 'react';
import {random, useVideoConfig} from 'remotion';

export const TriangleEntrace = ({children, progress}) => {
	const {height, width} = useVideoConfig();
	const path = `
	M 0 0
	L ${progress * 12 * width} 0
	L ${0} ${height * progress * 2}
	Z`;
	const [clipId] = useState(() => String(random(null)));

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					clipPath: `url(#${clipId})`,
				}}
			>
				{children}
			</AbsoluteFill>
			<AbsoluteFill>
				<svg>
					<defs>
						<clipPath id={clipId}>
							<path d={path} fill="red" />
						</clipPath>
					</defs>
				</svg>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
