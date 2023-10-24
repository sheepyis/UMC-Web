import styled from 'styled-components';

export const MovieContainer = styled.div`
    width: 11%;
    margin-top: 1.5vw;
    position: relative;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MovieImage = styled.img`
    width: 90%;
    min-height: 15vw;
    margin-top: 0.5vw;
`;

export const MovieExplain = styled.div`
    width: 100%;
    min-height: 5%;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 0.8vw;
    cursor: pointer;
`;

export const OverExplain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.8;
    color: white;
    font-size: 0.5vw;
    width: 100%;
    height: 100%;
    display: none;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const OverTitle = styled.p`
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    font-size: 1vw;
`;

export const OverView = styled.p`
    padding-left: 0.5vw;
    padding-right: 0.5vw;
`;
