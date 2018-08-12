import React from 'react';

import Hamburger from './hamburger';
import ChatView from './chatView';
import Account from './account';

class AppContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            showAccount : false
        }
    }

    showAccountInfo() {
        console.log('asdfasdf');
        this.setState({
            showAccount : !this.state.showAccount
        });
    }
    
    render() {
        return (
            <div className="main-con">
                <Hamburger toggleAccount={() => {this.showAccountInfo()}}></Hamburger>
                <ChatView></ChatView>
                {this.state.showAccount ? <Account></Account> : '' }
            </div>
        );
    }
}

export default AppContainer;