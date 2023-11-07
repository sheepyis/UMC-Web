import React, { useState } from 'react';

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

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
        button = <button style={buttonStyle} onClick={handleLogoutClick}>로그아웃</button>;
        message = <p style={messageStyle}>환영합니다!</p>;
    } else {
        button = <button style={buttonStyle} onClick={handleLoginClick}>로그인</button>;
        message = <p style={messageStyle}>로그인 해주세요!</p>;
    }

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            {button}
            {message}
        </div>
    );
};

export default LoginControl;
