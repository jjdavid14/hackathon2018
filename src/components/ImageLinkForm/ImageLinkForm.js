import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='ma4 mt0'>
			<div className='center'>
				<div className='form center pa5 br2 shadow-5'>
					<input className='f4 pa2 w-80 center' type='text' onChange={onInputChange}/>
					<button className='w-30 ba f4 link ph3 pv2 dib white bg-gray' onClick={onButtonSubmit}>Scan</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;
