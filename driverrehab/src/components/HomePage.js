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
        <Link to="/LoginPage">
          <button >Employee Login Link</button>
        </Link>
      </form>
    )
  }
}

export default HomePage;
