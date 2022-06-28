import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';

const SubTitle2 = ({text, subText}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / 3);
	const textToShow1 = text.slice(0, charsShown);
	const textToShow2 = subText.slice(0, charsShown);

	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '33rem',
				}}
			>
				<h1
					style={{
						fontFamily: 'SF Pro Text, Helvetica, Arial',
						fontWeight: 'bold',
						display: 'flex',
						justifyContent: 'center',
						fontSize: '50px',
						marginLeft: '40%',
						maxWidth: '50%',
						color: 'white',
					}}
				>
					{textToShow1}
				</h1>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '36rem',
				}}
			>
				<h3
					style={{
						fontFamily: 'SF Pro Text, Helvetica, Arial',
						fontWeight: 'bold',
						display: 'flex',
						justifyContent: 'center',
						fontSize: '50px',
						marginLeft: '40%',
						color: 'white',
					}}
				>
					{textToShow2}
				</h3>
			</AbsoluteFill>
		</>
	);
};

export default SubTitle2;
