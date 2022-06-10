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
function App() {



  return (
    <> 
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

//Cambiar base de datos para añadir la fecha de los post y quizas una descripccion personalizada para cada usuario.

//Añadir react router link en user data para generar links a los perfiles de los usuarios usando el id que le pasamos
//al componente. 

//Arreglar el componente de CreatePost (el post que se crea no tiene contenido).


