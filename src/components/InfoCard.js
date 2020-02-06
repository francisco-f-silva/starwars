import React from 'react';

const InfoCard = ({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }) => {
	return (
		<div className='tc dib br3 pa3 ma2 bw2 white-90 b'>
			<div>
				<p>Name: {name}</p>
				<p>Rotation period: {rotation_period} days</p>
				<p>Orbital period: {orbital_period} days</p>
				<p>Diameter: {diameter} km</p>
				<p>Climate: {climate}</p>
				<p>Gravity: {gravity}</p>
				<p>Terrain: {terrain}</p>
				<p>Surface water: {surface_water}</p>
				<p>Population: {population} inhabitants</p>
			</div>
		</div>
	);
}

export default InfoCard;