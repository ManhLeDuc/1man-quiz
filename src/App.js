import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CustomNavbar from './components/Navbar/CustomNavbar.jsx';

import Game from './pages/Game/Game.jsx';
import Home from './pages/Home/Home.jsx';
import Rank from './pages/Rank/Rank.jsx';
import Rule from './pages/Rule/Rule.jsx';
import Profile from './pages/Profile/Profile.jsx';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.jsx'
import QuestionList from './pages/QuestionList/QuestionList.jsx';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail.jsx';
import UpdateQuestion from './pages/UpdateQuestion/UpdateQuestion.jsx';
import Login from './pages/Login/Login.jsx';

import background from "./assets/bg.jpg";

import './App.css';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

function App() {

  return (
    <div style={styles}>
      <CustomNavbar></CustomNavbar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rule" component={Rule} />
          <Route exact path="/play" component={Game} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/profile/update' component={UpdateProfile} />
          <Route exact path="/questions" component={QuestionList} />
          <Route exact path="/questions/detail" component={QuestionDetail} />
          <Route exact path="/questions/update" component={UpdateQuestion} />
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
