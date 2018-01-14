import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
<<<<<<< HEAD
    return (
        <div className='center ma'>
            <div className='absolue mt2'>
                <img
                    id='inputimage'
                    alt=''
                    src={imageUrl}
                    width='500px'
                    height='auto'
                />
            </div>
        </div>
    );
=======
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<iframe src={imageUrl} width='500px' height='300px' frameBorder='0'></iframe>
			</div>
		</div>
		);
>>>>>>> 08c11f953e9fb06e946aa0d8ce849a7e288b6989
}

export default FaceRecognition;