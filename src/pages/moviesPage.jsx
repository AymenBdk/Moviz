import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { MovieService } from '../services/movie';
import { AuthService } from '../services/auth';
import '../index.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!new AuthService().isAuthenticated()) {
      navigate("/login");
    } else {
      new MovieService().getAllMovies().then(setMovies);
    }
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movies-page">
      <h1>Films</h1>
      <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" onClick={() => handleCardClick(movie.id)}>
          <img src={movie.imageUrl} alt="photo" />
          <h3>{movie.title}</h3>
          <p>{movie.releaseDate}</p>
        </div>
      ))}
      </div>
=======
import { MovieService } from '../services/movie';

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getAllMovies());
  }, []);

  return (
    <div>
      <h2>Films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
    </div>
  );
}

<<<<<<< HEAD
export default MovieList;


=======
export default MoviesPage;
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
