import React from 'react';
import './App.scss';
import Gallery from "./views/Gallery";
import KatacodaApp from "./katacoda/KatacodaApp";
import LikedPhotos from "./views/LikedPhotos";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/liked-photos">
          <LikedPhotos />
        </Route>
        <Route path="/katacoda">
          <KatacodaApp />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
      <h1>Its Home</h1>
  )
};

export default App;
