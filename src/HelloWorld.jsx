import { Sequence} from 'remotion';
import FirstLayer from './components/FirstLayer/FirstLayer';
import Main from './components/SecondLayer/Main';
import FirstLayerEffect from './components/Effects/FirstLayerEffect';
import FirstLayerEffect2 from './components/Effects/FirstLayerEffect2';
import UnderScorePath from './components/SecondLayer/Underscore/UnderScorePath';


export const HelloWorld = () => {

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
				<Sequence from={0} durationInFrames={70}  >
					<FirstLayer  />
			</Sequence>
			<Sequence from={65} durationInFrames={20} >
					<FirstLayerEffect color="red" />
			</Sequence>
			<Sequence from={84} durationInFrames={30} >
				<FirstLayerEffect2 color="red" />
			</Sequence>
			<Sequence from={112} durationInFrames={100} >
					<Main  />
			</Sequence>
			<Sequence from={136}  >
					<UnderScorePath color="red" titleText="CFC" />
			</Sequence>
		</div>
	);
};
