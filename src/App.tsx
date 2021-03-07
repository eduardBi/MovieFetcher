import React from 'react';
import MovieList from "./components/MovieList";
import WishList from "./components/WishList";
import SingleMovie from "./components/SingleMovie";
import Nav from "./components/NavigationBar";
import { BrowserRouter ,Route, Switch ,Link} from "react-router-dom";
import "./scss/main.scss";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
        <Switch>
          <Route path="/" exact  component={MovieList}/>
          <Route path="/wishlist" exact component={WishList}/>
          <Route path="/Movies/:name" exact component={SingleMovie}/>
        </Switch>
    </BrowserRouter>
    <img className="background-image" src={require('./background.png').default} alt=""/>
    </>
  );
}

export default App;

