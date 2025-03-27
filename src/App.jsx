import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Movieslist from './pages/moviesPage';
import AddMovieForm from './pages/addMoviesPage.jsx';
import MovieDetails from './pages/movieDetailsPage.jsx';
import './index.css';


function App() {
  return (
    <>
 
        <Header />
        <Routes>
        <Route path="/accueil" element={<HomePage />} />
         <Route path="/connexion" element={<LoginPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
        <Route path="/movies" element={<Movieslist />} />
        <Route path="/add" element={<AddMovieForm />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
        <Footer/>
      
    </>
  )
}

export default App
