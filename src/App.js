import './App.css';
import Searchmovie from './search';
import { useState, useEffect } from 'react';
import Movielist from './movielist';
import Carousel from 'react-bootstrap/Carousel'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchmovie, setSearchmovie] = useState('avengers');

  const Requestmovie = async () => {
    const url = `https://www.omdbapi.com/?apikey=23af7877&s=${searchmovie}`;

    const response = await fetch(url);
    const data = await response.json()
    if (data.Search) {
      setMovies(data.Search);
    }
  }

  useEffect(() => {
    Requestmovie(searchmovie);
  }, [searchmovie])
    ;
  return (
    <div>
      <h1 id="title"> The Kaurdashian's Movie Palace</h1>
      <div className="topnav">
        <a className="active" href="#home">Movies</a>
        <a href="#about">Theaters</a>
        <a href="#contact">Gift Cards | Store</a>
        <a href="#contact">More</a>
        <div className="moviesearch">
          <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie} />
        </div>
        <div>
          {<img id="moviesPic" src="thester.jpg"/> }
        </div>
      </div>
      <div className='movieList'>
        <Movielist movies={movies} />
      </div>
    </div>
  );
}

export default App;