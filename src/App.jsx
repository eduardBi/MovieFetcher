import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import MovieList from "./components/MovieList";

const App = () => {
   let movies=useSelector(e=>e);
   //получаю список фильмов из саги 
   const dis=useDispatch();
  return (
    <div>
        <MovieList dis={dis} movies={movies}></MovieList>
    </div>
  );
}

export default App;

