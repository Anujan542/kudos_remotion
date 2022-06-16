import {useCallback} from 'react'
import {Audio, continueRender, delayRender} from 'remotion'
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
import Baseball from './assets/baseball.mp4'
import Football from './assets/football.mp4'
import CoachVideo from './assets/coach_video.mp4'

import FirstImage from './assets/img_8.jpg'
import logo from './assets/bat.jpg'
import ThirdLayer from './assets/img_5.jpg'
import FourthVideo from './assets/vid_2.mp4'
import SportImage from './assets/img_9.png'
import Logo1 from "./assets/img_3.png";
import Logo2 from "./assets/img_4.png"
import { db } from './Firebase-Config';
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from 'react';

export const HelloWorld = () => {

  const [handle] = useState(() => delayRender());

	const [assets,setAssets] = useState([])
	const usersCollectionRef = collection(db, "assets");

	const fetchData = useCallback(async () => {
		const data = await getDocs(usersCollectionRef);
		setAssets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    continueRender(handle);
  }, [handle]);

	useEffect(() => {
    fetchData();
  }, [fetchData]);

	return (
		<>
			{assets.map((item) => (
			<div style={{flex: 1, backgroundColor: 'black'}}>
		    <Sequence from={0} durationInFrames={70} >
					<FirstLayer image={item.AwardImage} logo={item.Logo} />
				</Sequence>
			<Sequence from={65} durationInFrames={20} >
		 	  	<FirstLayerEffect color={item.PrimaryColor} />
			 </Sequence>
			<Sequence from={84} durationInFrames={30} >
			<FirstLayerEffect2 color={item.PrimaryColor} />
					</Sequence>
		<Sequence from={112} durationInFrames={190} >
				<Main baseBall={item.SecondLayerVideo} logo={item.Logo} />
					</Sequence>
		<Sequence from={136}  durationInFrames={166} >
				<UnderScorePath color={item.PrimaryColor}   />
					</Sequence>
			<Sequence from={185} durationInFrames={116} >
				<Title titleText={item.BrandName} />
					</Sequence>
			<Sequence from={203} durationInFrames={100} >
				<SubTitle titleText={item.AwardTitle} />
			</Sequence>
			<Sequence from={232} durationInFrames={70} >
				<Date titleText="18 MAY 2022" />
					</Sequence>
					<Sequence from={268} durationInFrames={35}   >
				<Effect4 />
					</Sequence>
			<Sequence from={300} durationInFrames={35}   >
				<Palette color={item.PrimaryColor} />
					</Sequence>
			<Sequence from={330} durationInFrames={118}  >
				<ThirdMain video={ThirdLayer} Logo1={Logo1} Logo2={Logo2} />
					</Sequence>
			<Sequence from={330} durationInFrames={118} >
				<FirstTitle titleText="PROUDLY RECOZNIZED BY:" />
					</Sequence>
		<Sequence from={350} durationInFrames={99} >
				<SecondTitle titleText={item.CoachName} />
		</Sequence>
		<Sequence from={380} durationInFrames={69} >
			 <ThirdTitle  />	
		</Sequence>
		<Sequence from={440} durationInFrames={12} >
		<Effect5 color={item.SecondaryColor}  />
					</Sequence>
					<Sequence from={450}  durationInFrames={150} >
		<ForthMain video={FourthVideo} logo={item.Logo} sideImage={item.SideImage} Logo1={Logo1} Logo2={Logo2} />
		</Sequence>
		<Sequence from={454}  durationInFrames={150} >
				<ForthLayerTitle text={item.StudentFirstName} />
		</Sequence>
		<Sequence from={454}  durationInFrames={150} >
				<ForthLayerTitle2 text={item.StudentLastName} />
		</Sequence>
		<Sequence from={500}  durationInFrames={100} >
				<SubTitle2 text={item.StudentPosition}  subText={item.StudentShirtNumber} />
		</Sequence>
		<Sequence from={500}  durationInFrames={100} >
				<UnderLine secondaryColor={item.SecondaryColor} />
		</Sequence>
		<Sequence from={600}  durationInFrames={20} >
			<FourthLayerEffect color={item.PrimaryColor}  />
		</Sequence>
		<Sequence from={618} durationInFrames={179} >
	    	<FadeTransition type="in" duration={50}>
		<FithLayerMain video={Football} />
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
			<VideoPath video={item.CoachVideo} />
		</Sequence>
		<Sequence from={1880} durationInFrames={40} >
		  <Palette color={item.PrimaryColor} />
		</Sequence>
		<Sequence from={1920} durationInFrames={180} >
			<FadeTransition type="in" duration={50}>
			    <FadeTransition type="out" duration={50}>
					<SeventhMain video={Football}  />
				</FadeTransition>
			</FadeTransition>
		</Sequence>
		<Sequence from={2100} durationInFrames={800} >
		<Main baseBall={item.SecondLayerVideo} logo={logo} />
		</Sequence>
		<Sequence from={2140} durationInFrames={760} >
		<Title titleText={`${item.StudentFirstName} ${item.StudentLastName}`}/>
		</Sequence>
		<Sequence from={2180} durationInFrames={720} >
				<SubTitle titleText={item.BrandName}/>
					</Sequence>
					<Sequence from={2190} durationInFrames={720} >
				<LastTitle  />
			</Sequence>
			{/* <Sequence from={0} durationInFrames={2800} >
			<Audio src={audio} />
			</Sequence> */}
		</div>
			))}
			</>
		);
};
