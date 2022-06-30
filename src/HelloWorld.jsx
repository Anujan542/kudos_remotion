import {useCallback} from 'react'
import { continueRender, delayRender } from 'remotion'
import 'typeface-open-sans';
import { Sequence} from 'remotion';
import FirstLayer from './components/FirstLayer/FirstLayer';
import Main from './components/SecondLayer/Main';
import FirstLayerEffect from './components/Effects/FirstLayerEffect';
import FirstLayerEffect2 from './components/Effects/FirstLayerEffect2';
import UnderScorePath from './components/SecondLayer/Underscore/UnderScorePath';
import Title from './components/SecondLayer/Title/Title';
import SubTitle from './components/SecondLayer/SubTitle/Subtitle';
import Date from './components/SecondLayer/Date/Date';
import { Palette } from './components/Effects/Effect3';
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
import SeventhMain from './components/7thLayer/7thMain';
import LastTitle from './components/7thLayer/LastTitle';


// Assets 
// import Baseball from './assets/baseball.mp4'
// import Football from './assets/football.mp4'
// Import CoachVideo from './assets/coach_video.mp4'

// import FirstImage from './assets/img_8.jpg'
// import logo from './assets/bat.jpg'
import ThirdLayer from './assets/img_5.jpg'
import FourthVideo from './assets/vid_2.mp4'
// Import SportImage from './assets/img_9.png'
import Logo1 from "./assets/img_3.png";
import Logo2 from "./assets/img_4.png"

import { useEffect, useState } from 'react';
import { EncourageMusic, Music } from './components/audio/Audio';
import LastTitle2 from './components/7thLayer/LastTitle2';
import LastTitle3 from './components/7thLayer/LastTitle3';
import LastTitle4 from './components/7thLayer/LastTitle4';
import StageClipGIf from './components/7thLayer/StageClipGIf';
import LogoImage from './components/7thLayer/LogoImage';

export const HelloWorld = () => {

  const [handle] = useState(() => delayRender());

	const [assets,setAssets] = useState([])


	const fetchData = useCallback(async () => {
  	await	fetch(`https://remotion-api.herokuapp.com/api/getDetails`)
			.then((response) => response.json())
			.then((actualData) => {
        setAssets(actualData);
      })
				.catch((err) => {
					console.log(err.message);
				});

    continueRender(handle)
	}, [handle]);
	

	useEffect(() => {
		fetchData();
  }, [fetchData]);

	return (
		<>
			{assets.map((item,index) => (
			<div key={index} style={{flex: 1, backgroundColor: 'black'}}>
		    <Sequence from={0} durationInFrames={70} >
					<FirstLayer image={item.awardImage} logo={item.logo} />
				</Sequence>
			<Sequence from={65} durationInFrames={20} >
		 	  	<FirstLayerEffect color={item.primaryColor} />
			 </Sequence>
			<Sequence from={84} durationInFrames={30} >
			<FirstLayerEffect2 color={item.primaryColor} />
					</Sequence>
		<Sequence from={112} durationInFrames={190} >
				<Main baseBall={item.secondLayerVideo} logo={item.logo} />
		</Sequence>
		<Sequence from={136}  durationInFrames={166} >
				<UnderScorePath color={item.primaryColor}   />
					</Sequence>
			<Sequence from={185} durationInFrames={116} >
				<Title titleText={item.brandName} />
					</Sequence>
			<Sequence from={203} durationInFrames={100} >
				<SubTitle titleText={item.awardTitle} />
			</Sequence>
			<Sequence from={232} durationInFrames={70} >
				<Date titleText="29th Jun 2022" />
					</Sequence>
					<Sequence from={268} durationInFrames={35}   >
				<Effect4 />
					</Sequence>
			<Sequence from={300} durationInFrames={35}   >
				<Palette color={item.primaryColor} />
					</Sequence>
			<Sequence from={330} durationInFrames={118}  >
				<ThirdMain video={ThirdLayer} Logo1={Logo1} Logo2={Logo2} />
					</Sequence>
			<Sequence from={330} durationInFrames={118} >
				<FirstTitle titleText="PROUDLY RECOZNIZED BY:" />
					</Sequence>
		<Sequence from={350} durationInFrames={99} >
				<SecondTitle titleText={item.coachName} />
		</Sequence>
		<Sequence from={380} durationInFrames={69} >
			 <ThirdTitle  />	
		</Sequence>
		<Sequence from={440} durationInFrames={12} >
		<Effect5 color={item.secondaryColor}  />
					</Sequence>
					<Sequence from={450}  durationInFrames={350} >
		<ForthMain video={FourthVideo} logo={item.logo} sideImage={item.sideImage} Logo1={Logo1} Logo2={Logo2} />
					</Sequence>
		<Sequence from={450} durationInFrames={350} >
	    	<EncourageMusic  audioVoice={item.coachAudio} />
		</Sequence>
		<Sequence from={454}  durationInFrames={350} >
				<ForthLayerTitle text={item.studentFirstName} />
		</Sequence>
		<Sequence from={454}  durationInFrames={350} >
				<ForthLayerTitle2 text={item.studentLastName} />
		</Sequence>
		<Sequence from={500}  durationInFrames={300} >
				<SubTitle2 text={item.studentPosition}  subText={item.studentShirtNumber} />
		</Sequence>
		<Sequence from={500}  durationInFrames={300} >
				<UnderLine secondaryColor={item.secondaryColor} />
		</Sequence>
		<Sequence from={800}  durationInFrames={20} >
			<FourthLayerEffect color={item.primaryColor}  />
		</Sequence>
		<Sequence from={819} durationInFrames={179} >
	    	<FadeTransition type="in" duration={50}>
		<FithLayerMain video={item.secondLayerVideo} />
		    </FadeTransition>
					</Sequence>
		<Sequence from={998} durationInFrames={1130} >
			<FadeTransition type="in" duration={50}>
					<SixthLayer color={item.primaryColor}  />
			</FadeTransition>
		</Sequence>
		<Sequence from={1000} durationInFrames={1130} >
			<SixthTitle />
		</Sequence>
		<Sequence from={1000} durationInFrames={1130} >
			<SixthName />
		</Sequence>
		<Sequence from={1000} durationInFrames={1130} >
			<SixthUserName title={item.studentFirstName}  />
		</Sequence>
		<Sequence from={1103} durationInFrames={1030} >
			<VideoPath video={item.coachVideo} />
		</Sequence>
		<Sequence from={2134} durationInFrames={20} >
		  <Palette color={item.primaryColor} />
		</Sequence>
		<Sequence from={2155} durationInFrames={180} >
			<FadeTransition type="in" duration={50}>
			    <FadeTransition type="out" duration={50}>
					<SeventhMain video={item.secondLayerVideo}  />
				</FadeTransition>
			</FadeTransition>
		</Sequence>
		<Sequence from={2328} durationInFrames={280} >
						<LogoImage image={item.awardImage} logo={item.logo}  />
		</Sequence>
		<Sequence from={2368} durationInFrames={250} >
		<Title titleText={`${item.studentFirstName} ${item.studentLastName}`}/>
		</Sequence>
		<Sequence from={2408} durationInFrames={200} >
				<SubTitle titleText={item.brandName}/>
					</Sequence>
			<Sequence from={2448} durationInFrames={40} >
				<LastTitle  />
					</Sequence>
					<Sequence from={2488} durationInFrames={40} >
				<LastTitle2  />
					</Sequence>
					<Sequence from={2528} durationInFrames={40} >
				<LastTitle3  />
					</Sequence>
					<Sequence from={2568} durationInFrames={40} >
				<LastTitle4  />
					</Sequence>
					<Sequence from={2610} durationInFrames={40} >
				<StageClipGIf  />
			</Sequence>
			<Music />
		</div>
			))}
			</>
		);
};
