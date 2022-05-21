/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import video from '../../assets/vid_8.gif';
import bat from '../../../public/bat.jpg';
import Logo from './Logo/Logo';

const Main = () => {
	return (
		<div>
			<div>
				<img
					style={{
						Position: 'absolute',
						left: '0px',
						top: '0px',
						zIndex: -1,
					}}
					src={video}
				/>
				<img
					style={{
						Position: 'absolute',
						left: '40px',
						top: '40px',
						zIndex: -1,
					}}
					src={bat}
				/>
			</div>
			{/* <div>
				<Logo />
			</div> */}
		</div>
	);
};

export default Main;
