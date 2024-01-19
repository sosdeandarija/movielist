import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    
    async function fetchMovie (id) {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=96bfdca5e8df4fc8271e2a390587e053`);
          const data = await response.json();
          if(data) setMovie(data)
        }
        catch(e) {
          console.log(e.message)
        }
      }

    useEffect(() => {
        fetchMovie(id);
    }, [id])

    if(!movie) return <h2>🔃Loading...</h2> 

    return <div className="movie-details">
       <div>
            <h1>Title:{movie.title}</h1>
            <h2>Original title: {movie.original_title}</h2>
            <h2>Release date: {movie.release_date}</h2>
            <h2>Original language: {movie.original_language}</h2>
            <h3>Overview: {movie.overview}</h3>
            <h4>Rating: {movie.vote_count} people voted {movie.vote_average}/10</h4>
            <Link to='/home/'>
                <button className="back-btn">Back</button>
            </Link>
       </div>
        
        {movie.poster_path ? <div><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/></div> : '' }
                
    </div>
}