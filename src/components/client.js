import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";


export default function Client({ register }) {
  const {  watch, handleSubmit, errors } = useForm();

  return (
    <>
    <h1>Client</h1>
    <div class="form-group">
      <label htmlFor="firstName">First Name</label>
      <input
      class="form-control"
      name="firstName"
      placeholder="first name"
      ref={register({ required: true })} />
      {errors.firstName && <h>First name is required</h>}
      </div>

      <div class="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input class="form-control" name="lastName" placeholder="last name" ref={register({ required: 'ERROR' })}  />
      {errors.firstName && <p>First name is required</p>}

      </div>

      <div class="form-group">
      <label htmlFor="email">Email</label>
      <input
        class="form-control"
        name="email"
        placeholder="bluebill1049@hotmail.com"
        type="email"
        ref={register({ required: true })}
      />
      </div>
    </>
  );
}
