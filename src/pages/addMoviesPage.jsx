import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthService } from '../services/auth';
<<<<<<< HEAD
import { MovieService } from '../services/movie'; 
=======
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9

function AddMovieForm() {
  if (!new AuthService().isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {     
=======
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs du formulaire
    if (!title || !description || !releaseDate || !imageUrl) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    // // Formatage de la date pour s'assurer qu'elle est au format jj/mm/aaaa
    // const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    // if (!datePattern.test(releaseDate)) {
    //   setError('La date de sortie doit être au format jj/mm/aaaa');
    //   return;
    // }

    try {
      // Appel à MovieService pour ajouter le film
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
      const movie = {
        title,
        description,
        releaseDate,
        imageUrl
      };
<<<<<<< HEAD
      const movieService = new MovieService(); 
      await movieService.createMovie(movie); 
      setError('');
      alert('Film ajouté avec succès');
=======

      MovieService.addMovie(movie); // Assurez-vous que MovieService a une méthode pour ajouter un film
      setError('');
      alert('Film ajouté avec succès');
      // Réinitialiser les champs après l'ajout
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
      setTitle('');
      setDescription('');
      setReleaseDate('');
      setImageUrl('');
    } catch (error) {
      setError('Une erreur s\'est produite lors de l\'ajout du film');
    }
  };

  return (
    <div className="auth-form">
      <h2>Ajouter un film</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Date de sortie (jj/mm/aaaa)</label>
          <input
            type="date"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">URL de l'image</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter le film</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
