import React from 'react';
import './Rank.css';

const Rank = ({ isDog }) => {
	if(isDog) {
		return (
				<div className='f3 ma0' id='dogfound-text'>
					{'Doggo Spotted!!'}
				</div>
			);
	} else {
		return null;
	}
}

export default Rank;