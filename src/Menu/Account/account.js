import React from 'react';

class Account extends React.Component {
	render() {
		return (
			<div className="account-con">
				<h3>Account</h3>
				<div className="account-pic">
					<div className="acc-pic-con">
						<img src={require('../../temp/ac.jpg')} alt="" />
						<span className="prof-pic">Profile picture</span>
					</div>
				</div>
				<div className="form-field-con">
					<h4>Perosnal info</h4>
					<div>
						<span className="form-field">Username</span>
						<span>Ganesh</span>
					</div>

					<div>
						<span className="form-field">Email</span>
						<span>ganesh@gmail.com</span>
					</div>

					<div>
						<span className="form-field">Anonymous?</span>
						<input type="checkbox" />
						<p className="anon-msg">
							If you choose to post anonymous your username will
							not be revealed
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Account;
