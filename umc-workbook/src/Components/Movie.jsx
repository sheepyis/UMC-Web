import React from 'react'

function Movie(props) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`;

    return (
        <div className="movieContainer">
            <img src={posterUrl} alt={props.movieData.title}/>

            <div className="movieExplain">
                <p id="movieTitle">{props.movieData.title}</p>
                <p id="movieVote">{props.movieData.vote_average}</p>
            </div>

            <div className="overExplain">
                <div className="overExplainContainer">
                    <p id="overTitle">{props.movieData.title}</p>
                    <p id="overView">{props.movieData.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie
