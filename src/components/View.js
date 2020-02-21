import React from 'react';
import {Redirect} from 'react-router-dom';
import IntakeForm from './IntakeForm'

class View extends React.Component {

  onSubmit = () => {
         return  <IntakeForm/>

  }

  render() {
    return (
      <div>
      <h1>VIEW</h1>
      <u>Case 1</u>
      <u>Case 2</u>
      <u>Case 3</u>
      </div>
    )
  }
}

export default View;
