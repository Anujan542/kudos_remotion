import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {Typography} from '@material-ui/core';

const ThirdTitle = ({titleText, titleColor, bottom, size, weight}) => {
	const frame = useCurrentFrame();
	const text = titleText;
	// A new character every 3 frames
	const charsShown = Math.floor(frame / 1);
	const textToShow = text.slice(0, charsShown);
	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					fontWeight: weight,
				}}
			>
				<Typography
					style={{
						//		FontFamily: 'Open Sans',
						fontWeight: weight,
						fontSize: size,
						textAlign: 'center',
						position: 'absolute',
						bottom,
						width: '100%',
						color: titleColor,
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						animation:
							'typing 1.5s steps(30, end), blink-caret 0.5s step-end infinite',
					}}
				>
					{textToShow}
				</Typography>
			</AbsoluteFill>
		</>
	);
};

export default ThirdTitle;
