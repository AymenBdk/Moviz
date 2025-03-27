import React, { useEffect, useState } from 'react';
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
    </div>
  );
}

export default MovieList;


