import React from 'react';

class Account extends React.Component {

    render() {
        return (
            <div className="account-con">
                <h3>Account</h3>
                <div className="form-field-con">
                    <span className="form-field">Username</span>
                    <span>Ganesh</span>
                    <br />
                    <span className="form-field">Email</span>
                    <span>ganesh@gmail.com</span>
                    <br />
                    <span className="form-field">Anonymous?</span>
                    <input type="checkbox" />
                </div>
            </div>
        );
    }
}

export default Account;