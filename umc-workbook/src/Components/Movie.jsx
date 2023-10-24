import React from 'react';
import {
    MovieContainer,
    MovieImage,
    MovieExplain,
    OverExplain,
    OverTitle,
    OverView,
} from './Movie.style';

const Movie = (props) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`;

    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'block';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'none';
    };

    return (
        <MovieContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <MovieImage src={posterUrl} alt={props.movieData.title} />

            <MovieExplain>
                <p id="movieTitle">{props.movieData.title}</p>
                <p id="movieVote">{props.movieData.vote_average}</p>
            </MovieExplain>

            <OverExplain className="overExplain">
                <OverTitle>{props.movieData.title}</OverTitle>
                <OverView>{props.movieData.overview}</OverView>
            </OverExplain>
        </MovieContainer>
    );
};

export default Movie;
