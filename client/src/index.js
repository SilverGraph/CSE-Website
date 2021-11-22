import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Switch} from 'react-router'
import Home from './pages/Home/Home';
import Students from './pages/Students/Students';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Resources from './pages/Resources/Resources'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/resources" component={Resources} />
      <Route>
        <h1>You are in a wrong page...</h1>
      </Route>  
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

