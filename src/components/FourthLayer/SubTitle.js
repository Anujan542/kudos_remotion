import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';

import '../SecondLayer/Title/Title.css';

const SubTitle2 = ({text, subText}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<>
			<AbsoluteFill
				className="typewriter"
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '30rem',
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
					{text}
				</h1>
			</AbsoluteFill>
			<AbsoluteFill
				className="typewriter"
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: '33rem',
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
					{subText}
				</h3>
			</AbsoluteFill>
		</>
	);
};

export default SubTitle2;
