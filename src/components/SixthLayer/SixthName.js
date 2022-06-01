import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';

export const SixthName = () => {
	const videoConfig = useVideoConfig();

	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();
	const text = 'A PROUD MESSAGE FROM'.split('  ').map((t) => ` ${t} `);

	const transitionProgress = spring({
		fps,
		frame: frame - 80,
		config: {
			damping: 200,
		},
	});

	const freeTranslateX = interpolate(
		transitionProgress,
		[0, 1],
		[0, -width / 4]
	);

	return (
		<div
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				width: '100%',
				marginTop: '20rem',
				transform: `translateX(${freeTranslateX}px)`,
			}}
		>
			{text.map((t, i) => {
				return (
					<p
						key={t}
						style={{
							color: 'white',

							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</p>
				);
			})}
		</div>
	);
};
