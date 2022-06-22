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
function App() {

const data = useContext(Context);

  
  return (    
    <>
      {!data.loggedIn && <Registrerpage />}
      <Routes>
        
        <Route path={`/name/V0.0/user/:id`} element={<UserProfile />} />
        <Route path={`/name/v0.0/feed`} element={<UserFeed/>}/>
      </Routes>


       
      <h1>______________________________</h1>     
    </>
  )
}

export default App;

//Arreglar las vistas
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


