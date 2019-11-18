import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './components/SignIn'
import Sign from './components/SignIn'


function App() {
  return (
  
      <Router>
<div>
 
        <Link to="/home">home</Link>
     
  <Switch>
    <Route path="/home" exact={true}>
      <Home />
    </Route>
  </Switch>
</div>

          </Router>





//           <div>
// <Sign />
// </div>
  );
}

export default App;
