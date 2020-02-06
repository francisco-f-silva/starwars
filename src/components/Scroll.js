import React from 'react';

const Scroll = (props) => { //scrollable component that renders its children
	return(
		<div style={{overflowY: 'scroll', height: '300px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;