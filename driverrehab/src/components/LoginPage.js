import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import IntakeForm from './IntakeForm'
import { useForm } from "react-hook-form";



function LoginPage (){
  const { register, watch,setValue, handleSubmit, errors } = useForm();

  // submit username and password to the database
  const onSubmit = data => {
  alert(JSON.stringify(data));
  // if password matches pw in database, username matches username in database, route to employeeLoginPage
  
  };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
        <label htmlFor="firstName">Username</label>
        <input
        className="form-control"
        name="username"
        placeholder="username"
        ref={register({ required: true })} />
        {errors.username && <p>Username is required</p>}
        </div>

        <div class="form-group">
        <label htmlFor="lastName">Password</label>
        <input class="form-control" name="password" type="password" ref={register({ required: 'ERROR' })}  />
        {errors.password && <p>password is required</p>}
        </div>
        <input class="btn btn-primary" type="submit" />
      </form>
    )

}

export default LoginPage;
