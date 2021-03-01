import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
// react redux не работает на tsx 


function App() {
  let [uploadMoviePages,setUploadMoviePages]=useState(6)
// количество страниц которые я буду подгружать (при первой загрузке подгружаются 5 страниц)
  let movies=useSelector(e=>e)
//получаю список фильмов из саги 

  const dis=useDispatch()
  useEffect(()=>{
    for(let i=1;i<uploadMoviePages;i++){
      dis({type:"REQUEST_MOVIES",page:i})
    }
    //добавляю первые 5 страниц с сервера при первой загрузке
  },[])
  

  const handleUploadOnScroll=()=>{
    setUploadMoviePages(uploadMoviePages+1)
    dis({type:"REQUEST_MOVIES",page:uploadMoviePages})
  }

  return (
          <ul>
            {movies.map(e=><li>{e.title}</li>)}
            <button onClick={handleUploadOnScroll}>awsa</button>
          </ul>
     );
}

export default App;
