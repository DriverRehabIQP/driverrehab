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
const [seizureDate, setSeizureDate] = React.useState(null);
const driverLicense = watch("driverLicense");
const adaptiveEquipment = watch("adaptiveEquipment");
const selfRestrictedDriving = watch("selfRestrictedDriving");




 React.useEffect(() => {
   register({ name: "date" }, { required: true });
 }, []);

 React.useEffect(() => {
   register({ name: "seizureDate" });
 }, []);


return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <h1>Client</h1>
  <div class="form-group">
    <label htmlFor="firstName">First Name</label>
    <input
    className="form-control"
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
          name="dateOfBirth"
          selected={date}
          onChange={val => {
            setDate(val);
            setValue("date", val)
          }}
        />
        {errors.date && <p>Date of birth is required</p>}


      <div class="form-row">
        <div class="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
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
                  ref={register({ required: true
                                   })} />
          {errors.state && <p>State is required</p>}


        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" name="zip" class="form-control" id="inputZip"  ref={register({ required: true,pattern:/^[0-9]*$/ })} />
            {errors.zip && <p>Zip is required</p>}
        </div>

      </div>


      <h1>Referal source (if applicable)</h1>

      <div class="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
        class="form-control"
        name="referalFirstName"
        placeholder="first name"
        ref={register}/>
        </div>

        <div class="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input class="form-control" name="referalLastName" placeholder="last name" ref={register}/>
        </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                class="form-control"
                name="referalEmail"
                id="inputEmail4"
                placeholder="bluebill1049@hotmail.com"
                type="email"
                ref={register}/>
            </div>

            <div class="form-group col-md-6">
            <label for="mobileNumber">Mobile number</label>
            <input
             type="tel"
             class="form-control"
             name="referalMobileNumber"
             ref={register}/>

            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" name="referalAddress" class="form-control" id="inputAddress" placeholder="1234 Main St" ref={register}/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" name="referalCity" class="form-control" id="inputCity" ref={register}/>
            </div>

            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <input type="text" name="referalState" class="form-control" id="inputState "
                      ref={register}/>

            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" name="referalZip" class="form-control" id="inputZip"  ref={register}/>
            </div>
          </div>

    <h1>Medical Information</h1>
    <div class="form-group">
        <label for="medicalClearance">Explain if you don't have medical clearance to drive</label>
        <textarea name="medicalClearance" class="form-control" id="medicalClearanceTextArea" rows="3" ref={register}></textarea>
      </div>

    <div class="form-group">
        <label for="drivingConcerns">Driving concerns (if applicable)</label>
        <textarea name="drivingConcerns" class="form-control" id="drivingConcernsTextArea" rows="3" ref={register}></textarea>
      </div>

      <div class="form-group">
        <label htmlFor="diagnosis">Diagnosis</label>
        <input
        className="form-control"
        name="diagnosis"
        ref={register}/>
        </div>

      <div class="form-group">
        <label htmlFor="onset">Onset</label>
        <input
        className="form-control"
        name="onset"
        ref={register}/>
        </div>

        <label htmlFor="seizureDate">Date of last seizure (if applicable)</label>
        <DatePicker
              isClearable
              name="seizureDate"
              selected={seizureDate}
              onChange={val => {
                setSeizureDate(val);
                setValue("seizureDate", val)
              }}
            />

    <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Medication use?</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input"
                  name="medicationUse"
                  type="radio"
                  id="gridRadios1"
                  value="yes"
                  ref={register({ required: true })} />

          <label class="form-check-label" for="gridRadios1">
            Yes
          </label>
          {errors.medicationUse && <p>Required</p>}
        </div>

        <div class="form-check">
          <input class="form-check-input" name="medicationUse" type="radio" id="gridRadios2" value="no"
          ref={register({ required: true })} />
          <label class="form-check-label" for="gridRadios2">
            No
          </label>
        </div>
      </div>
    </div>
  </fieldset>


  <h1>Driving History</h1>
  <fieldset class="form-group">
  <div class="row">
    <legend class="col-form-label col-sm-2 pt-0">Do you have a driver's license?</legend>
    <input name="driverLicense" type="checkbox" ref={register} />
      {driverLicense && (
        <div>
          <label>License Number</label>
          <input type="text" name="licenseNumber" ref={register} />
          <label>State</label>
          <input type="text" name="licenseState" ref={register} />
        </div>
      )}
  </div>
  </fieldset>
  <fieldset class="form-group">
  <div class="row">
    <legend class="col-form-label col-sm-2 pt-0">Is your privilege to drive under suspension or revocation?</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input"
                name="priviledgeToDrive"
                type="radio"
                value="yes"
                ref={register({ required: true })} />

        <label class="form-check-label" for="gridRadios1">
          Yes
        </label>
        {errors.priviledgeToDrive && <p>Required</p>}
      </div>

      <div class="form-check">
        <input class="form-check-input" name="priviledgeToDrive" type="radio" id="gridRadios2" value="no"
        ref={register({ required: true })} />
        <label class="form-check-label" for="gridRadios2">
          No
        </label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="form-group">
      <label htmlFor="vehicle">Vehicle year, make / model:</label>
      <input
      className="form-control"
      name="vehicle"
      ref={register} />
      </div>
    <div class="form-group">
      <label htmlFor="Mileage">Mileage</label>
      <input
      className="form-control"
      name="mileage"
      ref={register} />
      </div>

    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Do you currently use adaptive equipment to drive?</legend>
      <input name="adaptiveEquipment" type="checkbox" ref={register} />
    </div>
        {adaptiveEquipment && (
          <div>
            <label>Describe the equipments</label>
            <textarea class="form-control" type="text" name="adaptiveEquipmentDescription" rows="3" ref={register} />
            <label>Problems using the equipment</label>
            <textarea class="form-control" type="text" name="adaptiveEquipmentProblem" rows="3" ref={register} />
          </div>
        )}
      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">Do you self-restrict your driving?</legend>
        <input name="selfRestrictedDriving" type="checkbox" ref={register} />
      </div>
          {selfRestrictedDriving && (
            <div>
              <label>Describe</label>
              <textarea class="form-control" type="text" name="selfRestrictedDrivingDescription" rows="3" ref={register} />
            </div>
          )}







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
