import React from "react"

import { useForm } from "react-hook-form";

import "./index.css";
import Client from "./client";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function IntakeForm(){
  const { register, watch,setValue, handleSubmit, errors } = useForm();
  const onSubmit = data => {
  alert(JSON.stringify(data));
  };

const moreDetail = watch("moreDetail");
const [date, setDate] = React.useState(null);

 React.useEffect(() => {
   register({ name: "date" }, { required: true });
 }, []);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <h1>Client</h1>
  <div class="form-group">
    <label htmlFor="firstName">First Name</label>
    <input
    class="form-control"
    name="firstName"
    placeholder="first name"
    ref={register({ required: true })} />
    {errors.firstName && <p>First name is required</p>}
    </div>

    <div class="form-group">
    <label htmlFor="lastName">Last Name</label>
    <input class="form-control" name="lastName" placeholder="last name" ref={register({ required: 'ERROR' })}  />
    {errors.firstName && <p>Last name is required</p>}
    </div>

    <label htmlFor="dateOfBirth">Date of birth</label>
    <DatePicker
          isClearable
          selected={date}
          onChange={val => {
            setDate(val);
            setValue("date", val)
          }}
        />

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            class="form-control"
            name="email"
            id="inputEmail4"
            placeholder="bluebill1049@hotmail.com"
            type="email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}    />
            {errors.email && <p>Required valid email address</p>}

        </div>

        <div class="form-group col-md-6">
        <label for="mobileNumber">Mobile number</label>
        <input
         type="tel"
         class="form-control"
         name="mobileNumber"
         ref={register({
           required: true,
           maxLength: 11,
           minLength: 8,
           pattern:/^(?:\d{8}(?:\d{2}(?:\d{2})?)?|\(\+?\d{2,3}\)\s?(?:\d{4}[\s*.-]?\d{4}|\d{3}[\s*.-]?\d{3}|\d{2}([\s*.-]?)\d{2}\1\d{2}(?:\1\d{2})?))$/
           })}
       />
       {errors.mobileNumber && <p>Required valid phone number </p>}

        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St"  ref={register({ required: true })} />
          {errors.address && <p>Address is required</p>}
      </div>
      <div class="form-group">
        <label for="inputAddress2">Mailing Address (if different)</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Mailing address" ref={register}/>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" name="city" class="form-control" id="inputCity"ref={register({ required: true })} />
            {errors.city && <p>City is required</p>}
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <input type="text" name="state" class="form-control" id="inputState "
                  ref={register({ required: true,
                                  maxLength: 2,
                                  minLength: 2, })} />
          {errors.state && <p>State is required</p>}


        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" name="zip" class="form-control" id="inputZip"  ref={register({ required: true,pattern:/^[0-9]*$/ })} />
            {errors.zip && <p>Zip is required</p>}
        </div>

      </div>

    <div class="form-check">
    <input
    class="form-check-input"
    name="moreDetail"
    type="checkbox" ref={register} />
    {moreDetail && (
      <div class="form-group">
        <label>Interests</label>
        <input class="form-control" id="exampleFormControlTextarea1"  type="text" name="Interests" ref={register} />
      </div>
    )}
    <label class="form-check-label"  htmlFor="lastName">More Details</label>

    </div>
    <input class="btn btn-primary" type="submit" />

  </form>


);
}

export default IntakeForm
