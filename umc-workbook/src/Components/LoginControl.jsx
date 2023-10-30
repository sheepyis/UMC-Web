import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button, message;

        const buttonStyle = {
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '1vw',
            fontSize: '1vw',
            border: 'none',
            cursor: 'pointer',
        };

        const messageStyle = {
            color: 'white',
            fontSize: '1vw',
            fontWeight: 'bold',
        };

        if (isLoggedIn) {
            button = <button style={buttonStyle} onClick={this.handleLogoutClick}>로그아웃</button>;
            message = <p style={messageStyle}>환영합니다!</p>;
        } else {
            button = <button style={buttonStyle} onClick={this.handleLoginClick}>로그인</button>;
            message = <p style={messageStyle}>로그인 해주세요!</p>;
        }

        return (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw"}}>
                {button}
                {message}
            </div>
        );
    }
}

export default LoginControl;
