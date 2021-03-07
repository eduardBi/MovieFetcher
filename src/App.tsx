import React from 'react';
import MovieList from "./components/MovieList";
import WishList from "./components/WishList";
import SingleMovie from "./components/SingleMovie";
import { BrowserRouter ,Route, Switch ,Link} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Link to="/wishlist">wishlist</Link>
    <Link to="/">main</Link>
        <Switch>
          <Route path="/" exact  component={MovieList}/>
          <Route path="/wishlist" exact component={WishList}/>
          <Route path="/Movies/:name" exact component={SingleMovie}/>
          </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

