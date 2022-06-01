import './App.css';
import { createContext, useState } from 'react';
import  RegistrerPage  from './components/Registrerpage';
import LoginPage from './components/Loginpage';
import Post from './components/Post/Posts'
import Friends from './components/Friends/Friends';
import Personal from './components/PersonalProfile/Personal'
import CreatePost from './components/Post/CreatePost';



function App() {



  return (
    <> 
        
      <Personal />
      <CreatePost/>
      
    </>
)
}

export default App;
