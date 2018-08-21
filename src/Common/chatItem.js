import React from 'react';

class ChatItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="msg-item">
				<div className="user-con">
					<span className="avatar">
						<img src="../temp/a.jpg" alt="" />
					</span>
					<span className="username">{this.props.author}</span>
				</div>
				<span className="message">{this.props.message}</span>
				<hr />
				<div className="msg-actions-con">
					<div className="msg-actions">
						<span>3 Comments</span>
						<span>1 Like</span>
						<span>14 Views</span>
					</div>
					<span>Reply</span>
				</div>
			</div>
		);
	}
}

export default ChatItem;
