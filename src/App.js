import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route,Switch, Redirect} from 'react-router-dom'
import './App.css';
import Home from './MyComp/Home'
import About from './MyComp/About'
import Service from './MyComp/Service'
import Contact from './MyComp/Contact'
import Common from './MyComp/Common'
import Nav from './MyComp/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/service' component={Service}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Redirect to='/'/>
      </Switch>

    </div>
  );
}

export default App;
