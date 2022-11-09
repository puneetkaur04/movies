import React from 'react'

const Movielist = (props) => {
    return(
        <>
        {props.movies.map((movie, index) => (
            <div>
                <img src={movie.Poster} alt="movies"/>
                <div id="info">
                    <p> {movie.Title} </p>
                    <p> {movie.Year} </p>
                </div>
            </div>
        ))}
        </>
    );
}

export default Movielist;