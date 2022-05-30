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
import SecondTitle from './components/ThirdLayer/SecondTitle';
import ThirdTitle from './components/ThirdLayer/ThirdTitle';
import Effect5 from './components/Effects/Effect5';
import ForthMain from './components/FourthLayer/ForthMain';
import ForthLayerTitle  from './components/FourthLayer/ForthLayerTitle';
import UnderLine from './components/FourthLayer/UnderLine';
import SubTitle2 from './components/FourthLayer/SubTitle';



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
			<Sequence from={330} durationInFrames={118}  >
					<ThirdMain />
			</Sequence>
			<Sequence from={330} durationInFrames={118} >
					<FirstTitle titleText="PROUDLY RECOZNIZED BY:" />
			</Sequence>
			<Sequence from={350} durationInFrames={99} >
					<SecondTitle titleText="ANUJAN" />
			</Sequence>
			<Sequence from={380} durationInFrames={69} >
					<ThirdTitle  />
			</Sequence>
			<Sequence from={440} durationInFrames={12} >
					<Effect5 color="black"  />
			</Sequence>
			<Sequence from={450}  durationInFrames={150} >
					<ForthMain/>
			</Sequence>
			<Sequence from={454}  durationInFrames={150} >
					<ForthLayerTitle text="BRUCE WAYNE" />
			</Sequence>
			<Sequence from={500}  durationInFrames={100} >
					<SubTitle2 text="Middle"  subText="5" />
			</Sequence>
			<Sequence from={500}  durationInFrames={100} >
					<UnderLine secondaryColor="grey" />
			</Sequence>

		</div>
	);
};
