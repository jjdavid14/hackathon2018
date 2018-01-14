import React from 'react';

const Rank = ({ isDog }) => {
	if(isDog) {
		return (
			<div>
				<div className='white f3'>
					{'Doggo Spotted!'}
				</div>
			</div>
			);
	} else {
		return null;
	}
}

export default Rank;