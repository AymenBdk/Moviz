import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
<<<<<<< HEAD
import Movieslist from './pages/moviesPage';
import AddMovieForm from './pages/addMoviesPage.jsx';
import MovieDetails from './pages/movieDetailsPage.jsx';
=======
import MoviesPage from './pages/moviesPage';
import AddMovieForm from './pages/addMoviesPage.jsx';
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
import './index.css';


function App() {
  return (
    <>
<<<<<<< HEAD
 
=======
      <div>
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
        <Header />
        <Routes>
        <Route path="/accueil" element={<HomePage />} />
         <Route path="/connexion" element={<LoginPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
<<<<<<< HEAD
        <Route path="/movies" element={<Movieslist />} />
        <Route path="/add" element={<AddMovieForm />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
        <Footer/>
      
=======
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/add" element={<AddMovieForm />} />

        {/* <Route path="/movie/:id" element={<MoviePage />} />  */}
      </Routes>
        <Footer/>
      </div>
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
    </>
  )
}

export default App
