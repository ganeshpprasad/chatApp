import React from 'react';


class ChatItem extends React.Component{
    constructor(props) {
        super(props);
        
    }
        
    render() {
        return (
            <div className="msg-item">
                <span>{this.props.message}</span>
                <span>Posted by : {this.props.author}</span>
            </div>
        );
    }
}

export default ChatItem;