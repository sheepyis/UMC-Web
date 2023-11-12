import React from 'react'
import { Link } from "react-router-dom";
import { styled } from "styled-components";
// import LoginControl from './LoginControl';
import LoginControl2 from "./LoginControl2";

const HeaderContainer = styled.div`
    background: darkblue;
    display: flex;
    align-items: center;
    gap: 2vw;
    padding-left: 15%;
`

const HeaderP = styled.p`
    color: white;
    font-size: 1vw;
    font-weight: bold;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <img style={{ width: "154px", height: "2vw" }} 
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                    alt="로고"
                />     
            </Link>
            <Link to="/movie" style={{textDecoration: "none"}}><HeaderP>영화</HeaderP></Link>
            <Link to="/tv"  style={{textDecoration: "none"}}><HeaderP>TV 프로그램</HeaderP></Link>
            <Link to="/person"  style={{textDecoration: "none"}}><HeaderP>인물</HeaderP></Link>
            <LoginControl2/>
        </HeaderContainer>
    )
}

export default Header
