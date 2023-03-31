import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import style from "./App.module.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About.jsx';
import Form from'./components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';
import Detail from './components/Detail/Detail.jsx';

function App() {
   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation();
   const [access,setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate ("/")
   } , [access]);

   //! CRENDENCIALES FAKE

   const username = "fran@gmail.com";
   const password = "mipass123";
  

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find((char)=>char.id===data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡ID Repetido, ingrese otro numero :)!');
         }
      });
    }

    const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !==id));
    };

    const login = (userData) => {
      if(userData.username === username && userData.password === password) {
         setAccess(true);
         navigate("/home");
      }else{
         alert("Ingresar Usename y Password")
      }
    };

   return (
      
      <div className="App" stlye= {{ padding: '25px' }}>
      <div className={style.nav}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
          <Routes>
            <Route path="/" element={<Form Login={login} />} />
         <Route 
          path="/home" 
          element={<Cards characters={characters} onClose={onClose}/>} 
          /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} /> 
          </Routes>
      </div>
      
   </div>
   );

   
}

export default App;


