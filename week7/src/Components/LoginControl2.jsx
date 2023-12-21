import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginButton = styled.button`
    background-color: white;
    color: black;
    font-size: 1vw;
    border: none;
    border-radius: 2vw;
    cursor: pointer;
`

const LoginControl2 = () => {
    return (
        <Link to="/login">
            <LoginButton>로그인</LoginButton>
        </Link>
    )
}

export default LoginControl2;