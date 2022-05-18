import './App.css';
import { createContext, useState } from 'react';
import  RegistrerPage  from './components/Registrerpage';
import LoginPage from './components/Loginpage';

export const Context = createContext();


function App() {
  const [data, setData] = useState({
    userName: "",
    password: "",
  })

  return (
    <>
      <RegistrerPage>Aun no esta hecho</RegistrerPage>
      <LoginPage dataSetter={setData} />
      <Context.Provider value={data}>

      </Context.Provider>
    </>
)
}

export default App;
