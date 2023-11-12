import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const LoginP = styled.p`
    font-size: 1vw;
`;

const LoginBox = styled.div`
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
`;

const LoginButton = styled.button`
    margin-top: 2vw;
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        setEmailError("이메일 주소를 형식에 맞게 입력해주세요 :(");
        } else {
        setEmailError("올바른 형식입니다 :)");
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])(?!.*\s).{8,}$/;
        if (!passwordRegex.test(password)) {
        setPasswordError("비밀번호를 형식에 맞게 입력해주세요 :(");
        } else {
        setPasswordError("올바른 형식입니다 :)");
        }
    };

    const isLoginButtonEnabled = emailError.includes("올바른") && passwordError.includes("올바른");

    const handleLogin = () => {
        if (isLoginButtonEnabled) {
            navigate("/");
        }
    };

    return (
        <LoginContainer>
        <div style={{ width: "68%", marginTop: "2vw" }}>
            <LoginP style={{ fontWeight: "bold" }}>이메일과 비밀번호를<br />입력해주세요.</LoginP>
            <LoginBox>
                <LoginP>이메일 주소</LoginP>
                <input type="text" placeholder="이메일을 입력해주세요." style={{ fontSize: "1vw", width: "20vw", height: "2vw" }} value={email} onChange={(e) => { setEmail(e.target.value); validateEmail(); }} />
            {emailError && (
                <LoginP style={{ color: emailError.includes("올바른") ? "green" : "red", marginTop: "0.5vw" }}>
                    {emailError}
                </LoginP>
            )}
            </LoginBox>

            <LoginBox>
            <LoginP>비밀번호</LoginP>
            <input type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" style={{ fontSize: "1vw", width: "20vw", height: "2vw" }} value={password} onChange={(e) => { setPassword(e.target.value); validatePassword(); }} />
            {passwordError && (
                <LoginP style={{ color: passwordError.includes("올바른") ? "green" : "red", marginTop: "0.5vw" }}>
                {passwordError}
                </LoginP>
            )}
            </LoginBox>

            <LoginButton onClick={handleLogin} disabled={!isLoginButtonEnabled}>로그인</LoginButton>
        </div>
        </LoginContainer>
    );
};

export default Login;
