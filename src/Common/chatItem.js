import React from 'react';

class ChatItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const images = require.context('../temp/', true);

		return (
			<div className="msg-item">
				<div className="user-con">
					<div className="user">
						<span className="avatar">
							<img
								src={images('./' + this.props.dp + '.jpg')}
								alt=""
							/>
						</span>
						<span className="username">{this.props.author}</span>
					</div>
					<span className="time">1 hr ago</span>
				</div>
				<span className="message">{this.props.message}</span>
				<hr />
				<div className="msg-actions-con">
					<div className="msg-actions">
						<span className="like msg-action">
							{this.props.like} Like
						</span>
						<span className="comments msg-action">
							{this.props.comments} Comments
						</span>
						<span className="views msg-action">
							{this.props.views} Views
						</span>
					</div>
					<span>Reply</span>
				</div>
			</div>
		);
	}
}

export default ChatItem;
