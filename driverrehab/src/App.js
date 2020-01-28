/* jshint esversion: 6 */




import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IntakeForm from './components/IntakeForm'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import EmployeePage from './components/EmployeePage'
import EvaluationForm from './components/EvaluationForm'

import {Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/intakeform' component={IntakeForm}/>
        <Route path='/loginpage' component={LoginPage}/>
        <Route path='/EmployeePage' component={EmployeePage}/>
        <Route path='/EvaluationForm' component={EvaluationForm}/>
      </Switch>
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
