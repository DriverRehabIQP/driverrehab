import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import IntakeForm from './IntakeForm'

class HomePage extends React.Component {

  render() {
    return (
      <form>
        <Link to="/intakeform">
          <button >Intake Form Link</button>
        </Link>
      </form>
    )
  }
}

export default HomePage;
