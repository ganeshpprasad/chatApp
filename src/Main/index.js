import React from "react";

import Hamburger from "../Menu/hamburger";
import ChatView from "../Common/chatView";
import Account from "../Menu/Account/account";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAccount: false
    };
  }

  showAccountInfo() {
    console.log("asdfasdf");
    this.setState({
      showAccount: !this.state.showAccount
    });
  }

  render() {
    return (
      <div className="main-con">
        <Hamburger
          toggleAccount={() => {
            this.showAccountInfo();
          }}
        />
        <ChatView />
        {this.state.showAccount ? <Account /> : ""}
      </div>
    );
  }
}

export default Main;
