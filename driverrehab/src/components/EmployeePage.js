import React from 'react';
import {Redirect} from 'react-router-dom';
import IntakeForm from './IntakeForm'
import SearchResult from './SearchResult'
import View from './View'


class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSearch: 'jj'
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({nameSearch: event.target.value});
    console.log(this.state.nameSearch)
  }

  onSubmit = (event) => {
    // send a search for NAME TO SERVER DATABASE
    // pass in the result to search result componenet
          alert(JSON.stringify(this.state.nameSearch));
          event.preventDefault();


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
              <form class="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                <input value={this.state.nameSearch} onChange={this.handleChange} class="form-control mr-sm-2" type="text" placeholder="Client search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
                <SearchResult/>

              </div>
              <div class="col-md-8">
                <IntakeForm/>

              </div>
          </div>
          <div class="row"></div>
      </div>


      </div>
    )
  }
}

export default EmployeePage;
