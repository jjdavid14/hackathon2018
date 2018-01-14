import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<iframe src={imageUrl} width='500px' height='300px' frameBorder='0'></iframe>
			</div>
		</div>
		);
}

export default FaceRecognition;