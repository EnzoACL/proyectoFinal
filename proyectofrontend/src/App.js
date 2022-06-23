import './App.css';
import Personal from './components/PersonalProfile/Personal'
import CreatePost from './components/Post/CreatePost';
import SearchBar from './components/SearchBar/SearchBar';
import Registrerpage from './components/Registrerpage';
import UserFeed from './components/UserFeed/UserFeed'
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom'
import UserProfile from './components/Views/UserProfile';
import { useContext } from 'react'
import { Context } from './components/Storage/Storage'
import LoginPage from './components/Loginpage';
import Authorization from './components/Authorization/Authorization';
function App() {

const data = useContext(Context);

  
  return (    
    <>
      <Routes>
        <Route path={`/register`} element={<Registrerpage/>} />
        <Route path={`/name/V0.0/user/:id`} element={<UserProfile />} />
        <Route path='/' element={<UserFeed/>}/>         
      </Routes>
      
    </>
  )
}

export default App;
//Cambiar storage, quitar data setter
//Desplegar
//Vistas con router
//CSS
//Añadir jwt authorization
//Arreglar en buttons boton comentar
//Poder añadir imagenes en posts
//Mejorar buscador para que busque de forma dinamica.


/*
      <h1>______________________________</h1>
      <Personal />
      <h1>______________________________</h1>
      <CreatePost />
      <h1>______________________________</h1>
      <SearchBar />
      <h1>______________________________</h1>

 */


