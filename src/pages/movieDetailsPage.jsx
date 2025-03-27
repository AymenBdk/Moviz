import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieService } from "../services/movie";
import { AuthService } from "../services/auth";
import "../index.css";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movieService = new MovieService();
    const [movie, setMovie] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      releaseDate: "",
      imageUrl: "",
    });
  
    useEffect(() => {
      if (!new AuthService().isAuthenticated()) {
        navigate("/connexion");
      } else {
        movieService
          .getMovieById(id)
          .then((data) => {
            setMovie(data);
            setFormData({
              title: data.title,
              description: data.description,
              releaseDate: data.releaseDate,
              imageUrl: data.imageUrl,
            });
          })
          .catch(() => navigate("/"));
      }
    }, [id]);
  
    const handleDelete = async () => {
      await movieService.deleteMovie(id);
      alert("Film supprimé");
      navigate("/movies");
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleApply = async () => {
      try {
        await movieService.updateMovie(id, formData);
        alert("Film mis à jour !");
        setMovie({ ...movie, ...formData });
        setIsEditing(false);
      } catch (error) {
        alert(error.message);
      }
    };
  
    if (!movie) return null;
  
    return (
      <div className="movie-details">
        <div className="movie-header">
          <h1>{movie.title}</h1>
          <div className="movie-actions">
            {!isEditing ? (
              <button onClick={handleEdit}>Modifier</button>
            ) : (
              <button onClick={handleApply}>Appliquer</button>
            )}
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        </div>
  
        <div className="movie-content">
          <div className="movie-info">
            <div>
              <label htmlFor="title">Titre :</label>
              {isEditing ? (
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              ) : (
                <p>{movie.title}</p>
              )}
            </div>
  

            <div>
              <label htmlFor="description">Description :</label>
              {isEditing ? (
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              ) : (
                <p className="description">{movie.description}</p>
              )}
            </div>
  
            <div>
              <label htmlFor="releaseDate">Date de sortie :</label>
              {isEditing ? (
                <input
                  type="date"
                  id="releaseDate"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                />
              ) : (
                <p className="release-date">{movie.releaseDate}</p>
              )}
            </div>
  
            <div>
              <label htmlFor="imageUrl">Image URL :</label>
              {isEditing ? (
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                />
              ) : (
                <img
                  className="movie-image"
                  src={movie.imageUrl}
                  alt={movie.title}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MovieDetails;