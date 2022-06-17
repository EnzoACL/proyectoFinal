import './App.css';
import { createContext, useState } from 'react';
import  RegistrerPage  from './components/Registrerpage';
import LoginPage from './components/Loginpage';
import Post from './components/Post/Posts'
import Friends from './components/Friends/Friends';
import Personal from './components/PersonalProfile/Personal'
import CreatePost from './components/Post/CreatePost';
import SearchBar from './components/SearchBar/SearchBar';
import Registrerpage from './components/Registrerpage';
import UserFeed from './components/UserFeed/UserFeed'
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom'
import UserProfile from './components/Views/UserProfile';
function App() {



  return (    
    <> 
      <Routes>
        <Route path={"/name/V0.0/user/:id"} element={<UserProfile />} />
      </Routes>
      <h1>______________________________</h1>
      <Personal />
      <h1>______________________________</h1>
      <CreatePost />
      <h1>______________________________</h1>
      <SearchBar />
      <h1>______________________________</h1>
      <UserFeed />
      <h1>______________________________</h1>      
    </>
  )
}

export default App;

//Mejorar buscador para que busque de forma dinamica.

//Añadir BrowserRouter para enseñar paginas de perfil de usuario en App.js

