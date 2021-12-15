import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Students from './pages/Students/Students';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import SocCard from './pages/Resources/SocCard';
import error from './components/error';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/resources" component={SocCard} />
      <Route path='*' component={error}/> 
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

