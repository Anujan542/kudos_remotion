import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const SubTitle = ({
	titleText,
	titleColor,
	bottom,
	size,
	marginLeft,
	fontWeight,
	fontStyle,
	time,
}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / time);
	const textToShow = titleText.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginLeft,
			}}
		>
			<div
				style={{
					fontFamily: 'Open Sans',
					fontSize: size,
					titleColor,
					fontWeight,
					fontStyle,
					bottom,
					textAlign: 'center',
					position: 'absolute',
					color: titleColor,
				}}
			>
				{textToShow}
			</div>
		</AbsoluteFill>
	);
};

export default SubTitle;
