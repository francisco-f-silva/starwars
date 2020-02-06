import React from 'react';
import Card from './Card';

const CardComparator = ({ planets, pics }) => {
	return (
		<div className='pa4 tracked'>
			<Card planets={planets} pics={pics} />
			<Card planets={planets} pics={pics} />
		</div>
	);
}

export default CardComparator;