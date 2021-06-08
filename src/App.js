import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './pages/Game/Game.jsx';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/play" component={Game} />
        <Route exact path="/profile" component={Profile}/>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
