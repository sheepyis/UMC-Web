import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUserId, updateUserPw } from '../actions/userActions';
import styled from "styled-components";

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginInput = styled.input`
    width: 30vw;
    height: 3vw;
    border: 0.3vw solid black;
    border-radius: 1.5vw;
    padding-left: 1vw;
    font-size: 1.2vw;
`

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (!username || !password) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login/', { 
                id: username, 
                pw: password 
            });
            
            if (response.data.code === 200) {
                console.log("로그인 성공", response.data.userInfo);
                dispatch(updateUserId(username));
                dispatch(updateUserPw(password));
            } else {
                throw new Error(response.data.code.toString());
            }
        } catch (error) {
            const errorCode = error.message;
            switch (errorCode) {
                case '400':
                    alert('모든 필드를 채워주세요.');
                    break;
                case '401':
                    alert('존재하지 않는 아이디입니다.');
                    break;
                case '402':
                    alert('비밀번호가 틀렸습니다.');
                    break;
                default:
                    alert('로그인 요청 중 오류가 발생했습니다.');
            }
        } finally {
            setTimeout(() => setLoading(false), 1500);
        }
    };

    return (
        <LoginContainer>
            <h1 style={{marginTop: "-5vw"}}>Login</h1>
            <LoginInput placeholder="아이디를 입력해주세요." value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
            <LoginInput placeholder="비밀번호를 입력해주세요." type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} disabled={loading} style={{marginTop: "5vw", width: "31vw", height: "4vw", backgroundColor: "white", border: "0.3vw solid black", borderRadius: "1.5vw", fontSize: "2vw", cursor: "pointer"}}>
                {loading ? 'Loading...' : 'Login'}
            </button>
        </LoginContainer>
    );
};

export default Login;