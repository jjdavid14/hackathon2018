import React from 'react';

<<<<<<< HEAD
const Rank = () => {
    return (
        <div>
        <div className='white f3'>
            { 'Andre, your current rank is...'}
        </div>
        <div className='white f1'>
            { '#5'}
        </div>
        </div>
    );
=======
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
>>>>>>> 08c11f953e9fb06e946aa0d8ce849a7e288b6989
}

export default Rank;