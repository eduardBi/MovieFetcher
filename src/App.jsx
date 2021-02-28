import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
// react redux не работает на tsx 


function App() {
  

  let movies=useSelector(e=>e)

  const dis=useDispatch()
  useEffect(()=>{
    dis({type:'REQUEST_MOVIES'})
  },[])
  

  return (
          <ul>
            {movies.map(e=><li>{e.title}</li>)}
            <button onClick={()=>dis({type:"REQUEST_MOVIES",action:5})}>awsa</button>
          </ul>

     );
}

export default App;
