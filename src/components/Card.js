import React from 'react';
import SelectBox from './SelectBox';
import InfoCard from './InfoCard';
import Scroll from './Scroll';

class Card extends React.Component {
	constructor () {
		super();
		this.state = {
			idxCurrPlanet: 0
		}
	}

	handleSelection = (event) => {
    	this.setState({ idxCurrPlanet: event.target.value });
  	}

	render () {
		const { planets, pics } = this.props;
		const { idxCurrPlanet } = this.state;
		var idxPic = (planets.length <= pics.length) ? idxCurrPlanet : Math.floor(Math.random() * pics.length);
	    if (!planets.length) { //same as (planets.length === 0)
	      return <h1>Loading</h1>;
	    } else {
			return (
				<div className='bl b--white-90 dib br3 pa4 ma3 grow shadow-5'>
					<SelectBox
						planets={planets} 
						handleSelection={this.handleSelection} 
					/>
					<div className='pt4'>
						{pics[idxPic]}
					</div>
		            <Scroll>
		            <InfoCard 
		            	name={planets[idxCurrPlanet].name} 
		            	rotation_period={planets[idxCurrPlanet].rotation_period} 
		            	orbital_period={planets[idxCurrPlanet].orbital_period}
		            	diameter={planets[idxCurrPlanet].diameter}
		            	climate={planets[idxCurrPlanet].climate}
		            	gravity={planets[idxCurrPlanet].gravity}
		            	terrain={planets[idxCurrPlanet].terrain}
		            	surface_water={planets[idxCurrPlanet].surface_water}
		            	population={planets[idxCurrPlanet].population} 
		        	/>
		        	</Scroll>
				</div>
			);
		}
	}
}

export default Card;