import React, { Component } from 'react';

class LoginControl extends Component { // LoginControl 클래스 생성
    constructor(props) { //생성자를 이용하여 초기 상태 지정
        super(props);
        //초기 상태: 로그인 안되어있음
        this.state = {
            isLoggedIn: false,
        };
    }

    //로그인 클릭 이벤트
    handleLoginClick = () => {
        //로그인 완료
        this.setState({ isLoggedIn: true });
    }

    //로그인일때 로그아웃으로 바꾸는 이벤트
    handleLogoutClick = () => {
        //로그아웃 완료
        this.setState({ isLoggedIn: false });
    }

    render() {
        // 렌더링을 위한 변수 생성, isLoggedIn을 기준으로 상태를 판별하여 렌더링
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

        if (isLoggedIn) {   //로그인이 된 상태라면
            button = <button style={buttonStyle} onClick={this.handleLogoutClick}>로그아웃</button>;
            message = <p style={messageStyle}>환영합니다!</p>;
        } else {    //로그아웃 된 상태라면
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
