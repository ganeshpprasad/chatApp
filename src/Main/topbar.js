import React from 'react';
import { NavTab } from 'react-router-tabs';
import Hamburger from '../Menu/hamburger';

const Topbar = () => {
	return (
		<div className="topbar-con">
			<Hamburger />
			<div className="nav-con">
				<div className="nav-con-base">
					<NavTab to="/home">Home</NavTab>
					<NavTab to="/chats">Chats</NavTab>
					<NavTab to="/people">Friends</NavTab>
					<NavTab to="/media">Videos</NavTab>
					<NavTab to="/notifs">Notifications</NavTab>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
