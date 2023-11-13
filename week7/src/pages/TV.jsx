import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { tvs } from '../util/tvDummy';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8%;
`;

const MovieContainer = styled.div`
    width: 11%;
    margin-top: 1.5vw;
    position: relative;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const MovieImage = styled.img`
    width: 90%;
    min-height: 15vw;
    margin-top: 0.5vw;
`;

const MovieExplain = styled.div`
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

const TV = () => {
    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'block';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'none';
    };

    const navigate = useNavigate();

    const handleMovieClick = (tvs) => {
        navigate(`/tv/${tvs.name}`, { state: tvs });
    };

    return (
        <Container>
            {tvs.results.map((tvs, index) => (
                <MovieContainer
                    key={index}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() => handleMovieClick(tvs)}
                >
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500${tvs.poster_path}`}
                        alt={tvs.title}
                    />

                    <MovieExplain>
                        <p id="movieTitle" style={{paddingLeft: "0.5vw"}}>{tvs.name}</p>
                        <p id="movieVote" style={{paddingRight: "0.5vw"}}>{tvs.vote_average}</p>
                    </MovieExplain>

                    <OverExplain className="overExplain">
                        <OverTitle>{tvs.title}</OverTitle>
                        <OverView>{tvs.overview}</OverView>
                    </OverExplain>
                </MovieContainer>
            ))}
        </Container>
    );
};

export default TV;
