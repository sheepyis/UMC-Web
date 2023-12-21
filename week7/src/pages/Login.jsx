import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginInput = styled.input`
    padding-left: 1vw;
    width: 35%;
    height: 3vw;
    color: black;
    font-size: 1.1vw;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 1vw;
    margin-top: 0.5vw;
    position: absolute;
`;

const LoginButton = styled.button`
    width: 38%;
    height: 3vw;
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "blue")};
    color: white;
    border: none;
    border-radius: 2vw;
    margin-top: 5vw;
    font-size: 1vw;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    useEffect(() => {
        setIsSubmitDisabled(!!emailError || !!passwordError || !email || !password);
    }, [emailError, passwordError, email, password]);

    const validateEmail = () => {
        if (!email || !email.includes("@")) {
            setEmailError("올바른 이메일을 입력하세요.");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(password)) {
            setPasswordError("올바른 비밀번호를 입력하세요.");
        } else {
            setPasswordError("");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validatePassword();
    };

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <LoginContainer>
            <div style={{ backgroundColor: "pink", width: "70%" }}>
                <h4>이메일과 비밀번호를<br />입력해주세요.</h4>
                <h6>이메일 주소</h6>
                <LoginInput
                    type="text"
                    placeholder="이메일을 입력하세요."
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={validateEmail}
                />
                {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
                <h6>비밀번호</h6>
                <LoginInput
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={validatePassword}
                />
                {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                <br />
                <LoginButton disabled={isSubmitDisabled} onClick={handleLogin}>
                    확인
                </LoginButton>
            </div>
        </LoginContainer>
    );
};

export default Login;
