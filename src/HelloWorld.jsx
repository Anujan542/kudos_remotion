import { Sequence} from 'remotion';
import FirstLayer from './components/FirstLayer/FirstLayer';
import Main from './components/SecondLayer/Main';
import FirstLayerEffect from './components/Effects/FirstLayerEffect';
import FirstLayerEffect2 from './components/Effects/FirstLayerEffect2';


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
					<FirstLayerEffect2 color="red"  />
			</Sequence>
			<Sequence from={112} durationInFrames={50} >
					<Main  />
			</Sequence>
		</div>
	);
};
