import {AbsoluteFill} from 'remotion';
import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import './Fade.css';

const ForthLayerTitle2 = ({text}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	return (
		<AbsoluteFill>
			<h1
				className="tilt-in-top-1"
				style={{
					fontFamily: 'SF Pro Text, Helvetica, Arial',
					fontWeight: 'bold',
					display: 'flex',
					justifyContent: 'center',
					fontSize: '30px',
					marginLeft: '45%',
					maxWidth: '50%',
					color: 'white',
					transform: `translateY(${interpolate(progress, [0, 2], [60, 0])}px)`,
				}}
			>
				{text.split('').map((t, i) => {
					return (
						<h1
							key={t + i}
							style={{
								color: 'white',
								marginRight: '1%',
								marginTop: '45%',
							}}
						>
							{t}
						</h1>
					);
				})}
			</h1>
		</AbsoluteFill>
	);
};

export default ForthLayerTitle2;
