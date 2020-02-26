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

  );
}

export default App;
