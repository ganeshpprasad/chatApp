import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { NavTab } from 'react-router-tabs';

import ChatView from '../Common/chatView';
import Account from '../Menu/Account/account';
import Topbar from './topbar.js';
import Sidebar from './sidebar.js';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showAccount: false,
			match: { path: 'localhost:3000/' }
		};
	}

	render() {
		const match = this.state.match;
		return (
			<BrowserRouter className="main-con">
				<div className="main-con">
					<Topbar />
					<div className="app-con">
						<Sidebar />
						<Switch>
							<Route path={`/account`} component={Account} />
							<Route
								exact
								path={`${match.path}`}
								render={
									<Redirect
										replace
										to={`${match.path}/home`}
									/>
								}
							/>
							<Route path={`/home`} component={ChatView} />
							<Route path={`/chats`} component={ChatView} />
							<Route
								path={`${match.path}/people`}
								component={ChatView}
							/>
							<Route
								path={`${match.path}/media`}
								component={ChatView}
							/>
							<Route
								path={`${match.path}/notifs`}
								component={ChatView}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;

//   <ChatView />
//         { this.state.showAccount ? <Account /> : "" }
