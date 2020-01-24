import React from 'react';
import {Redirect} from 'react-router-dom';
import IntakeForm from './IntakeForm'

class HomePage extends React.Component {

  onSubmit = () => {
         return  <IntakeForm/>

  }

  render() {
    return (
      <form>
        <button onClick={this.onSubmit}>Intake Form Link</button>
      </form>
    )
  }
}

export default HomePage;
