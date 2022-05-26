import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld'


export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={212}
				fps={50}
				width={1920}
				height={1080}
			/>
		</>
	);
};
