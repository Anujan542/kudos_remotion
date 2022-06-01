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
import ForthLayerTitle2 from './components/FourthLayer/ForthLayerTitle2';
import FourthLayerEffect from './components/Effects/FourthLayerEffect';
import FithLayerMain from './components/FifthLayer/FithLayerMain';
import { FadeTransition } from './components/FifthLayer/TransitionEffect';
import SixthLayer from './components/SixthLayer/SixthLayer';
import { SixthTitle } from './components/SixthLayer/SixthTitle';
import { SixthName } from './components/SixthLayer/SixthName';
import { SixthUserName } from './components/SixthLayer/SixthUserName';
import { VideoPath } from './components/SixthLayer/VideoPath';

// Assets 

import BackImage from './assets/img_8.jpg'
import Effect6 from './components/Effects/Effect6';
import SeventhMain from './components/7thLayer/7thMain';
import LastTitle from './components/7thLayer/LastTitle';



export const HelloWorld = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={70} >
					<FirstLayer image={BackImage} />
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
			<FadeTransition type="in" duration={50}>
		     	<ThirdTitle  />
						</FadeTransition>	
			</Sequence>
			<Sequence from={440} durationInFrames={12} >
					<Effect5 color="black"  />
			</Sequence>
			<Sequence from={450}  durationInFrames={150} >
					<ForthMain/>
			</Sequence>
			<Sequence from={454}  durationInFrames={150} >
					<ForthLayerTitle text="BRUCE" />
			</Sequence>
			<Sequence from={454}  durationInFrames={150} >
					<ForthLayerTitle2 text="Wayne" />
			</Sequence>
			<Sequence from={500}  durationInFrames={100} >
					<SubTitle2 text="Middle"  subText="5" />
			</Sequence>
			<Sequence from={500}  durationInFrames={100} >
					<UnderLine secondaryColor="grey" />
			</Sequence>
			<Sequence from={600}  durationInFrames={20} >
		    	<FourthLayerEffect color="red" />
			</Sequence>
			<Sequence from={618} durationInFrames={180} >
			<FadeTransition type="in" duration={50}>
			<FithLayerMain />
						</FadeTransition>
			</Sequence>
			<Sequence from={795} durationInFrames={1120} >
						<FadeTransition type="in" duration={50}>
						<SixthLayer />
					</FadeTransition>
			</Sequence>
			<Sequence from={795} durationInFrames={1120} >
		    	<SixthTitle />
			</Sequence>
			<Sequence from={795} durationInFrames={1120} >
		    	<SixthName />
			</Sequence>
			<Sequence from={795} durationInFrames={1120} >
		    	<SixthUserName title="ANUJAN" />
			</Sequence>
			<Sequence from={880} durationInFrames={1030} >
		    	<VideoPath />
			</Sequence>
			<Sequence from={1900} durationInFrames={20} >
		  	<Palette color="red" />
			</Sequence>
			<Sequence from={1920} durationInFrames={180} >
				<FadeTransition type="in" duration={50}>
				<FadeTransition type="out" duration={50}>
						<SeventhMain />
						</FadeTransition>
						</FadeTransition>
			</Sequence>
			<Sequence from={2100} durationInFrames={800} >
			<Main  />
			</Sequence>
			<Sequence from={2140} durationInFrames={760} >
					<Title titleText="CFC" />
			</Sequence>
			<Sequence from={2180} durationInFrames={720} >
					<SubTitle titleText="CEO" />
			</Sequence>
			<Sequence from={2190} durationInFrames={720} >
					<LastTitle  />
			</Sequence>
		</div>
	);
};
