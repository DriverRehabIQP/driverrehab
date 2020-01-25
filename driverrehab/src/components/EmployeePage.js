import React from 'react';
import {Redirect} from 'react-router-dom';
import IntakeForm from './IntakeForm'

class EmployeePage extends React.Component {

  onSubmit = () => {
         return  <IntakeForm/>

  }

  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Employee</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      </nav>


      <div class="container">
          <div class="row">
              <div class="col-md-4">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
              <div class="col-md-8">
                <u>SEARCH RESULT</u>
              </div>
          </div>
          <div class="row"></div>
      </div>


      </div>
    )
  }
}

export default EmployeePage;
