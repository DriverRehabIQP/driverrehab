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
const privatePayCheckbox = watch("privatePayCheckbox");
const feesCheckbox = watch("feesCheckbox");





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
    {errors.lastName && <p>Last name is required</p>}
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

        <div class="form-group">

          <label htmlFor="firstName">Unlicensed applicants only: Driver permit number</label>
          <input type="text" class="form-control" aria-describedby="permitHelpBlock" ref={register}/>
          <small id="permitHelpBlock" class="form-text text-muted">
              If you have a learner's permit, keep blank if not applicable
          </small>
      </div>

  <h1>Physical Abilities</h1>
    <label htmlFor="firstName">Do you have problems with any of the following? (Please check all that apply)</label>
    <div class="form-check">
    <input name="physicalAbilities" class="form-check-input" type="checkbox" value="limited hand function" id="defaultCheck1" ref={register}/>
    <label  class="form-check-label" for="defaultCheck1">
      Limited hand function
    </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving arms" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Difficulty moving arms
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving legs" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Difficulty moving legs
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head up" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Difficulty moving head up
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head down" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Difficulty moving head down
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head left" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Difficulty moving head left
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head right" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Difficulty moving head right
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="Neuropathy" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
          Neuropathy
      </label>
    </div>
    <div class="form-check">
      <input name="physicalAbilities" class="form-check-input" type="checkbox" value="visual difficulties" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Visual difficulties
      </label>
    </div>

    <label htmlFor="firstName">Do you use any of the following? (Check all that apply)</label>
    <div class="form-check">
      <input name="physicalEquipments" class="form-check-input" type="checkbox" value="walker" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Walker
      </label>
    </div>
    <div class="form-check">
      <input name="physicalEquipments" class="form-check-input" type="checkbox" value="crutches" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Crutches
      </label>
    </div>
    <div class="form-check">
      <input name="physicalEquipments" class="form-check-input" type="checkbox" value="cane" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Cane
      </label>
    </div>
    <div class="form-check">
      <input name="physicalEquipments" class="form-check-input" type="checkbox" value="manual wheelchair" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
      Manual wheelchair
      </label>
    </div>

    <div class="form-check">
      <input name="physicalEquipments" class="form-check-input" type="checkbox" value="power wheelchair" id="defaultCheck2" ref={register} />
      <label class="form-check-label" for="defaultCheck2">
        Power wheelchair
      </label>
    </div>

    <div class="form-group">
    <label htmlFor="lastName">Wheelchair make/model (if applicable)</label>
    <input class="form-control" name="wheelchairModel"  ref={register} />
    </div>

    <div class="form-group">
    <label htmlFor="lastName">Seated height in wheelchair (floor to top of head)</label>
    <input class="form-control" name="wheelchairHeight"  ref={register} />
    </div>

    <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Can you independently transfer into / out of wheelchair?</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input"
                  name="wheelchairTransfer"
                  type="radio"
                  value="yes"
                  ref={register} />

          <label class="form-check-label" for="gridRadios1">
            Yes
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" name="wheelchairTransfer" type="radio" id="gridRadios2" value="no"/>
          <label class="form-check-label" for="gridRadios2">
            No
          </label>
        </div>
      </div>
    </div>
  </fieldset>


  <h1>Cognitive Abilities</h1>
  <label htmlFor="cognitiveAbilities">Do you have problems with any of the following? (Check all that apply)</label>
  <div class="form-check">
    <input name="cognitiveAbilities" class="form-check-input" type="checkbox" value="difficulty concentrating on task" id="defaultCheck2" ref={register} />
    <label class="form-check-label" for="defaultCheck2">
      Difficulty concentrating on task
    </label>
  </div>
  <div class="form-check">
    <input name="cognitiveAbilities" class="form-check-input" type="checkbox" value="memories difficulties" id="defaultCheck2" ref={register} />
    <label class="form-check-label" for="defaultCheck2">
      Memories difficulties
    </label>
  </div>

  <h1>Funding</h1>


    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Private pay?</legend>
      <input name="privatePayCheckbox" type="checkbox" ref={register} />
    </div>
        {privatePayCheckbox && (
          <div class="row">
          <div class="form-check">
            <label class="form-check-label" for="defaultCheck2">
              Have fees (Evaluation plus any applicable travel costs) been explained to you?
            </label>
            <input name="feesCheckbox" type="checkbox" ref={register} />
          </div>
          </div>
        )}

      <div>
        {!feesCheckbox&&(
          <div class="form">
            <div class="form-group col-md-6">
              <label htmlFor="inputEmail4">Name of funding source:</label>
              <input
                class="form-control"
                name="fundingSource"
                type="text"
                ref={register} />
            </div>

              <div class="form-group col-md-6">
                <label htmlFor="inputEmail4">Contact person</label>
                <input
                  class="form-control"
                  name="fundingContactPerson"
                  type="text"
                  ref={register}    />
              </div>
                  <div class="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      class="form-control"
                      name="fundingEmail"
                      type="email"
                      ref={register({
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}    />
                  </div>
                  <div class="form-group col-md-6">
                  <label for="mobileNumber">Mobile number</label>
                  <input
                   type="tel"
                   class="form-control"
                   name="fundingMobileNumber"
                   ref={register({
                     maxLength: 11,
                     minLength: 8,
                     pattern:/^(?:\d{8}(?:\d{2}(?:\d{2})?)?|\(\+?\d{2,3}\)\s?(?:\d{4}[\s*.-]?\d{4}|\d{3}[\s*.-]?\d{3}|\d{2}([\s*.-]?)\d{2}\1\d{2}(?:\1\d{2})?))$/
                     })}
                 />
                 {errors.fundingMobileNumber && <p>Please provide valid phone number</p>}
                 </div>
                 <div class="form-group col-md-6">
                  <label for="inputAddress">Address</label>
                  <input type="text" name="fundingAddress" class="form-control" placeholder="1234 Main St"  ref={register} />
                </div>
                </div>
          )}
        </div>
        <label for="inputAddress">By checking this box, I acknowledge I have completed the Intake Form fully and to the best of my abilities.  All the information provided is factual.</label>
          <div class="form-group">
          <input type="text" name="acknowledgementCheckbox" type="checkbox" ref={register({ required: true})}/>
           {errors.acknowledgementCheckbox && <p>Acknowledgement is required</p>}
           </div>

     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
        Read Consent for Adaptive Driving Services
     </button>
     <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLongTitle">Consent for Adaptive Driving Services</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">

              I voluntarily authorize a driving evaluation and / or training be completed by CMSC Driver Evaluation and Training Program in West Boylston, MA.  The services include an interview, in-vehicle time and possible referrals to related services.  The in-vehicle time may be done in a CMSC vehicle, an appropriate rental vehicle or your own personal vehicle.  A formal report will be completed after the evaluation and / or training and it will include recommendations for vehicle and adaptive equipment requirements when appropriate, training when appropriate and driving retirement when appropriate.  A report will also be provided to funding state licensing agencies when appropriate.
              I understand that safely driving a motor vehicle requires good physical control of the vehicle as well as good visual, perceptual, and cognitive skills by the driver.  I understand that my disability or medical diagnosis may impair my ability to drive safely.  I am voluntarily consenting to driver evaluation/lessons in order to determine if I may have any impairment which may impede my ability to safely drive a motor vehicle.
              I acknowledge that no guarantees have been made to me regarding the results of the driving evaluation or training by CMSC.  I understand that operating a motor vehicle, and therefore participating in the evaluation, involves risk of injury, or even death. I further understand that any recommendation does not ensure my safety while driving in the future.

           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           </div>
         </div>
       </div>
     </div>

       <div class="form-group">
       <label for="inputAddress">By checking this box, I acknowledge I have read and consent to Adaptive Driving Services</label>
       <input type="text" name="consentCheckbox" type="checkbox" ref={register({ required: true})}/>
        {errors.consentCheckbox && <p>consent is required</p>}
        </div>

    <input class="btn btn-primary" type="submit" />

  </form>


);
}

export default IntakeForm
