import { Sequence} from 'remotion';
import FirstLayer from './components/FirstLayer/FirstLayer';
import AfterLogo from './components/FirstLayer/AfterLogo';
import Main from './components/SecondLayer/Main';
import { AfterLogo2 } from './components/FirstLayer/AfterLogo_2';


export const HelloWorld = () => {

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
				<Sequence from={0} durationInFrames={70}  >
					<FirstLayer  />
			</Sequence>
			<Sequence from={65} durationInFrames={20} >
					<AfterLogo color="red" />
			</Sequence>
			<Sequence from={84} durationInFrames={26} >
					<AfterLogo2 color="red"  />
			</Sequence>
			<Sequence from={105} durationInFrames={50} >
					<Main  />
			</Sequence>
		</div>
	);
};
