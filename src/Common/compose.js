import React from 'react';

class Compose extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: null
		};
	}

	updateState(e) {
		let _text = e.currentTarget.value;
		this.setState({
			text: _text
		});
	}

	postItem() {
		let _text = this.state.text;
		if (!_text) {
			return;
		}
		const item = {
			author: 'You',
			message: _text
		};
		this.props.addItem(item);
	}

	render() {
		return (
			<div className="compose-con">
				<textarea
					className="compose-area"
					value={this.state.text}
					onChange={e => {
						this.updateState(e);
					}}
				/>
				<div className="compose-btn-con">
					<button
						onClick={() => {
							this.postItem();
						}}
						className="compose-btn"
					>
						Post
					</button>
				</div>
			</div>
		);
	}
}

export default Compose;
