import './App.css'
import { SearchBar } from './components/SearchBar'
import { MovieDetails } from './components/MovieDetails'
import { MovieList } from './components/MovieList'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [movieList, setMovieList] = useState(null);

  async function handleSearch (e,query) {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=96bfdca5e8df4fc8271e2a390587e053&query=${query}`);
      const data = await response.json();
      if(data) setMovieList(data.results);
    }

    catch(e) {
      console.log(e.message)
    }
  }
  
  return (
    <div className='wrapper'>
      <h1>Movie Search App</h1>
      <Routes>
        <Route path='/movielist' element={<>
          <SearchBar onSearch={handleSearch}/>
          {movieList ? <MovieList movies={movieList}/> : <h2>Search for movies..</h2>}
          </>
        }/>
        <Route path='/:id' element={<MovieDetails/>}/>
      </Routes>
      
      </div>
  )
}

export default App
