import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginButton = styled.button`
    border: none;
    background-color: white;
    border-radius: 2vw;
    cursor: pointer;
    font-size: 1vw;
`

const LoginControl2 = () => {
    return (
        <Link to="/login">
            <LoginButton>
                로그인
            </LoginButton>
        </Link>
    )
}

export default LoginControl2;