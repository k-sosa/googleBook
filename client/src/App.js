import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListGroup from './components/ListGroup'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/index'
import Save from './pages/save';
import NavBar from './components/navBar'
function App() {
  return (
    <Router>
      <NavBar />
        <Route  exact path={["/", "/search"]} component={Home} />
             
        <Route exact path="/save">
          <Save/>
        </Route>
 
    </Router>
   
  );
}

export default App;
