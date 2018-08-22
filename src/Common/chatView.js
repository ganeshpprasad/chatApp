import React from 'react';

import response from '../temp/temp.json';
import ChatItem from './chatItem';
import Compose from './compose';

class ChatView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataLoading: true,
			chatList: []
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
		}, 0);
	}

	getChatFeedUI() {}

	getChatBody() {
		if (this.state.dataLoading) {
			return <div>Loading...</div>;
		}
		const listView = this.state.chatList.map((item, index) => {
			return (
				<ChatItem
					message={item.message}
					key={index}
					author={item.author}
					dp={item.dp_url}
					like={item.likes}
					comments={item.comments}
					views={item.views}
				/>
			);
		});
		return listView;
	}

	addItemToChatList(item) {
		console.log('item', item);
		item['dp_url'] = 'ac';
		item['likes'] = 0;
		item['comments'] = 0;
		item['views'] = 0;
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
				<Compose
					addItem={i => {
						this.addItemToChatList(i);
					}}
				/>
				<div className="chat-view">{this.getChatBody()}</div>
			</div>
		);
	}
}

export default ChatView;
