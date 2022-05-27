import './App.css';
import { createContext, useState } from 'react';
import  RegistrerPage  from './components/Registrerpage';
import LoginPage from './components/Loginpage';
import Post from './components/Post/Post'
import Friends from './components/Friends/Friends';




function App() {

const [messageContent, setMessageContent] = useState("Ejemplo de mensaje post publicacion etc")


  return (
    <> 
        
      <Post />
      <Friends></Friends>
      
    </>
)
}

export default App;
