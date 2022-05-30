import { Sequence} from 'remotion';
import FirstLayer from './components/FirstLayer/FirstLayer';
import Main from './components/SecondLayer/Main';
import FirstLayerEffect from './components/Effects/FirstLayerEffect';
import FirstLayerEffect2 from './components/Effects/FirstLayerEffect2';
import UnderScorePath from './components/SecondLayer/Underscore/UnderScorePath';
import Title from './components/SecondLayer/Title/Title';
import SubTitle from './components/SecondLayer/SubTitle/Subtitle';
import Date from './components/SecondLayer/Date/Date';
import Effect3, { Palette } from './components/Effects/Effect3';
import ThirdMain from './components/ThirdLayer/ThirdMain';
import { Effect4 } from './components/Effects/Effect4';
import FirstTitle from './components/ThirdLayer/FirstTitle';


export const HelloWorld = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={70} >
					<FirstLayer  />
			</Sequence>
			<Sequence from={65} durationInFrames={20} >
					<FirstLayerEffect color="red" />
			</Sequence>
			<Sequence from={84} durationInFrames={30} >
				<FirstLayerEffect2 color="red" />
			</Sequence>
			<Sequence from={112} durationInFrames={190} >
					<Main  />
			</Sequence>
			<Sequence from={136}  durationInFrames={166} >
					<UnderScorePath color="red"  />
			</Sequence>
			<Sequence from={185} durationInFrames={116} >
					<Title titleText="CFC" />
			</Sequence>
			<Sequence from={203} durationInFrames={100} >
					<SubTitle titleText="CEO" />
			</Sequence>
			<Sequence from={232} durationInFrames={70} >
					<Date titleText="18 MAY 2022" />
			</Sequence>
			<Sequence from={268} durationInFrames={35}   >
					<Effect4 color="red" />
			</Sequence>
			<Sequence from={300} durationInFrames={35}   >
					<Palette color="red" />
			</Sequence>
			<Sequence from={330} durationInFrames={60}  >
					<ThirdMain />
			</Sequence>
			<Sequence from={330} durationInFrames={60} >
					<FirstTitle titleText="PROUDLY RECOZNIZED BY:" />
			</Sequence>
		</div>
	);
};
