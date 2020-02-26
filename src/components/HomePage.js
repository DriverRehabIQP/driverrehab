import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import IntakeForm from './IntakeForm'
import EvaluationForm from './EvaluationForm'


class HomePage extends React.Component {

  render() {
    return (
      <form>
        <Link to="/intakeform">
         <button type="button" class="block"> Client: </button>;
        </Link>


        <Link to="/EvaluationForm">
          <button type="button" class="bloc1k">Evaluator: </button>;
        </Link>


      </form>
    )
  }
}

export default HomePage;