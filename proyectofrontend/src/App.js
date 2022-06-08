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
      <RegistrerPage/>
      <Personal />
      <CreatePost/>
      <SearchBar />
      <UserFeed/>
    </>
)
}

export default App;
