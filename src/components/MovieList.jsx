import { NavLink } from "react-router-dom"

/* eslint-disable react/prop-types */
export const MovieList = ({movies}) => {
    return (        
        <ul className="movie-list">
            {movies?.map(movie => {
            return <NavLink to={`/moviedetails/${movie.id}`} className={'movie-list-link'} key={movie.id}>
                    <li>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}/>
                        <h2>{movie.title}</h2>
                        <h4>Release date: {movie.release_date}</h4>
                        <h4>Rating: {movie.vote_average}/10</h4>
                    </li>
                </NavLink>
            })}
        </ul>
    )
}