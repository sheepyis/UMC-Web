import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { tv } from '../util/tvDummy';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8%;
`;

const TVContainer = styled.div`
    width: 11%;
    margin-top: 1.5vw;
    position: relative;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const TVImage = styled.img`
    width: 90%;
    min-height: 15vw;
    margin-top: 0.5vw;
`;

const TVExplain = styled.div`
    width: 100%;
    min-height: 5%;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 0.8vw;
    cursor: pointer;
`;

const OverExplain = styled.div`
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

const OverTitle = styled.p`
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    font-size: 1vw;
`;

const OverView = styled.p`
    padding-left: 0.5vw;
    padding-right: 0.5vw;
`;

const Movie = () => {
    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'block';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'none';
    };

    const navigate = useNavigate();

    const handleMovieClick = (tv) => {
        navigate(`/tv/${tv.name}`, { state: tv });
    };

    return (
        <Container>
            {tv.results.map((tv, index) => (
                <TVContainer
                    key={index}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() => handleMovieClick(tv)}
                >
                    <TVImage
                        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                        alt={tv.name}
                    />

                    <TVExplain>
                        <p id="tvTitle" style={{paddingLeft: "0.5vw"}}>{tv.name}</p>
                        <p id="tvVote" style={{paddingRight: "0.5vw"}}>{tv.vote_average}</p>
                    </TVExplain>

                    <OverExplain className="overExplain">
                        <OverTitle>{tv.name}</OverTitle>
                        <OverView>{tv.overview}</OverView>
                    </OverExplain>
                </TVContainer>
            ))}
        </Container>
    );
};

export default Movie;
