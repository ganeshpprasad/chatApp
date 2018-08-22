import React from 'react';
import { NavTab } from 'react-router-tabs/lib/NavTab';

class Hamburger extends React.Component {
	render() {
		return (
			<NavTab to="/home" className="hamburger">
				Company name
			</NavTab>
		);
	}
}

export default Hamburger;
