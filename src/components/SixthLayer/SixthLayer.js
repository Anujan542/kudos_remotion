import React from 'react';
import {Video} from 'remotion';
import video from '../../assets/vid_5.mp4';

const SixthLayer = ({color}) => {
	return (
		<>
			<div style={{position: 'static'}}>
				<Video playbackRate={0.3} src={video} style={{marginBottom: '5rem'}} />
				<div
					style={{
						position: 'absolute',
						top: '0',
						bottom: '0',
						left: '0',
						right: '0',
						height: ' 100%',
						width: ' 100%',
						backgroundColor: color,
						opacity: 0.3,
					}}
				>
					<div />
				</div>
			</div>
		</>
	);
};

export default SixthLayer;
