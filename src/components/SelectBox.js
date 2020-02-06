import React from 'react';

const SelectBox = ({ planets, handleSelection }) => {
	const namePlanets = planets.map((planet, idx) => {
		return (
			<option
				key={idx}
				value={idx}
			>
			{planets[idx].name}
			</option>
		);
	});

	return (
		<div>
			<select onChange={handleSelection} >{namePlanets}</select>
		</div>
	);
}

export default SelectBox;