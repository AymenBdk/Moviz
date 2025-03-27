import React, { useEffect, useState } from 'react';
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
    </div>
  );
}

export default MoviesPage;
