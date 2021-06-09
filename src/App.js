import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './pages/Game/Game.jsx';
import Home from './pages/Home/Home.jsx';
import Rank from './pages/Rank/Rank.jsx';
import Rule from './pages/Rule/Rule.jsx';
import Profile from './pages/Profile/Profile.jsx';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.jsx'
import QuestionList from './pages/QuestionList/QuestionList.jsx';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail.jsx';
import UpdateQuestion from './pages/UpdateQuestion/UpdateQuestion.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/rule" component={Rule} />
        <Route exact path="/play" component={Game} />
        <Route exact path="/rank" component={Rank} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path='/profile/update' component={UpdateProfile}/>
        <Route exact path="/questions" component={QuestionList}/>
        <Route exact path="/questions/detail" component={QuestionDetail}/>
        <Route exact path="/questions/update" component={UpdateQuestion}/>

        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
