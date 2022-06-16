import {Composition} from 'remotion';
import { HelloWorld } from './HelloWorld'




export const RemotionVideo = () => { 
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={2800}
				fps={36}
				width={1920}
				height={1080}
			/>
		</>
	);
};
