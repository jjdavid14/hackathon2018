import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
<<<<<<< HEAD
    return (
        <div className='ma4 mt0'>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. git it and '}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={ onInputChange }/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={ onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;
=======
	return (
		<div className='ma4 mt0'>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Scan</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;
>>>>>>> 08c11f953e9fb06e946aa0d8ce849a7e288b6989
