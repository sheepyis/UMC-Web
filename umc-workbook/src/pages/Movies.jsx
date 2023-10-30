import React from 'react';
import styled from 'styled-components';
import { movies } from '../util/movieDummy';

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

const Movie = () => {
    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'block';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'none';
    };

    return (
        <Container>
            {movies.results.map((movie, index) => (
                <MovieContainer
                    key={index}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />

                    <MovieExplain>
                        <p id="movieTitle" style={{paddingLeft: "0.5vw"}}>{movie.title}</p>
                        <p id="movieVote" style={{paddingRight: "0.5vw"}}>{movie.vote_average}</p>
                    </MovieExplain>

                    <OverExplain className="overExplain">
                        <OverTitle>{movie.title}</OverTitle>
                        <OverView>{movie.overview}</OverView>
                    </OverExplain>
                </MovieContainer>
            ))}
        </Container>
    );
};

export default Movie;
