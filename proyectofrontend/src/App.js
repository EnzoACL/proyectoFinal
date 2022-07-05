import './App.css';
import CreatePost from './components/Post/CreatePost';
import SearchBar from './components/SearchBar/SearchBar';
import Registrerpage from './components/Registrerpage';
import UserFeed from './components/UserFeed/UserFeed'
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom'
import UserProfile from './components/Views/UserProfile';
import { useContext } from 'react'
import { Context } from './components/Storage/Storage'
import Authorization from './components/Authorization/Authorization';
import UserData from './components/UserData/UserData';
import NavigatorBar from './components/Navigator/Navigator';
function App() {

  const [data, setData] = useContext(Context)
  
  return (
    <>      
      <Routes>
        <Route path={`/register`} element={<Registrerpage/>} />
        <Route path={`/name/V0.0/user/:id`} element={<UserProfile/>}/>
        
        <Route path='/' element={
          <Authorization>
            <div className='parent'>
              <div className='div1'>
                <UserData userId={data.userId} />
                <NavigatorBar userId={data.userId} />
              </div>
              <div className='div2'>
                <UserFeed />
              </div>              
            </div>
            </Authorization>
          } />
        
        <Route path='/search' element={<SearchBar/>} />
        <Route path='/createPost' element={
          <Authorization>
            <div className='parent'>
              <div className='div1'>
                <UserData userId={data.userId} />
                <NavigatorBar userId={data.userId} />
              </div>
              <div className='div2'>
                <CreatePost />
              </div>              
            </div>
          </Authorization>
          }/>
      </Routes>
    </>
  )
}

export default App;
// To do list:
//Paginacion para feed y perfiles de usuario.
//CSS.
//Añadir jwt authorization.
//Crear sesion de usuario.
//Añadir en buttons boton comentar y like.
//Poder añadir imagenes en posts.
//Mejorar buscador para que busque de forma dinamica.
//Subir propio avatar.
//Migrar base de datos a MondoDB.





