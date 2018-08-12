import React from 'react';

import response from './temp.json';
import ChatItem from './chatItem';
import Compose from './compose.js';

class ChatView extends React.Component{
    constructor(props) {
        super(props);
        
        this.state ={
            dataLoading : true,
            chatList : []    
        };
    }

    componentDidMount() {
        this.getChatFeed();
    }
    
    getChatFeed() {
        // axios call goes here
        setTimeout(() => {
            let list = [];
            list = response['response'];
            console.log('Call to server succeeded');
            this.setState({
                chatList: list,
                dataLoading: false
            });
        }, 3000);
    }
    
    getChatFeedUI() {
        
    }
    
    getChatBody() {
        if (this.state.dataLoading) {
            return (
                <div>Loading...</div>
            );
        }
        const listView = this.state.chatList.map((item, index) => {
            return <ChatItem message={item.message} key={index} author={item.author} />
        });
        return listView;
    }

    addItemToChatList(item) {
        console.log('item', item);
        let _items = this.state.chatList;
        if (!item) {
            return;
        }
        _items.push(item);
        this.setState({
            chatList: _items
        });
    }
        
    render() {
        return (
            <div className="chat-con">
                <div className="chat-view">
                    {this.getChatBody()}
                </div>
                <Compose addItem={(i) => {this.addItemToChatList(i)}} />
            </div>
        );
    }
}

export default ChatView;