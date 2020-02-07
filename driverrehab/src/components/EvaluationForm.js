import React from "react"

import { useForm } from "react-hook-form";

import "./index.css";
import Client from "./client";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';


export default function EvaluationForm(){
  const { register, watch,setValue, handleSubmit, errors } = useForm();
  const onSubmit = data => {
        alert(JSON.stringify(data));
        var template_params = {
         "to_email": data.sendTo,
         "to_emails": "",
         "driver_name": data.driver_name_value,
         "vehicle_used": data.vehicleUsed,
         "AE_used": data.AEUsed,
         "weather": data.weatherConditions,
         "road": data.roadConditions,
         "traffic": data.traffiConditions,
         "route": data.Route,
         "time": data.time,
         "primary_control_operation": data.primaryControlOperation,
         "awareness": data.awarenessTraffic,
         "adherence": data.adherenceLaw
      }

      var service_id = process.env.REACT_APP_SERVICE_ID;
      var template_id = process.env.REACT_APP_TEMPLATE_ID;
      var user_id=process.env.REACT_APP_USER_ID;
      console.log(service_id, template_id, user_id)
      emailjs.send(service_id, template_id, template_params, user_id )
  };


  const [evaluateDate, setDate] = React.useState(null);

  React.useEffect(() => {
    register({ name: "evaluateDate" }, { required: true });
  }, []);

  const LiftVehicleAcessCheckbox = watch("LiftVehicleAcessCheckbox");

  const LiftTransferBoardCheckbox = watch("LiftTransferBoardCheckbox");
  const WheelchairLiftCheckbox = watch("WheelchairLiftCheckbox");
  const RampAssistCheckbox = watch("RampAssistCheckbox");
  const OccupiedWheelchairRestraintCheckbox = watch("OccupiedWheelchairRestraintCheckbox");
  const HeadBackrestCheckbox = watch("HeadBackrestCheckbox");

  const RampCheckbox = watch("RampCheckbox");
  const SeatCheckbox = watch("SeatCheckbox");

  const StepsCheckbox = watch("StepsCheckbox");
  const TransferSeatBaseCheckbox = watch("TransferSeatBaseCheckbox");

  const   DockingConsoleCheckbox = watch("DockingConsoleCheckbox");


return (
  <form onSubmit={handleSubmit(onSubmit)}>

  <div class="form-group">
    <label htmlFor="driver_name_value">Driver's name</label>
    <input class="form-control" name="driver_name_value" ref={register}  />
  </div>

  <h1>In-vehicle Assessment</h1>

  <div class="form-group">
    <label htmlFor="vehicleUsed">Vehicle used</label>
    <input class="form-control" name="vehicleUsed" ref={register}  />
  </div>

    <div class="form-group">
        <label for="AEUsed">AE used</label>
        <textarea name="AEUsed" class="form-control" rows="3" ref={register}></textarea>
      </div>


    <div class="form-group">
        <label for="weatherConditions">Weather Conditions</label>
        <input name="weatherConditions" class="form-control"  rows="3" ref={register}/>
      </div>


    <div class="form-group">
        <label for="roadConditions">Road Conditions</label>
        <input name="roadConditions" class="form-control"  rows="3" ref={register}/>
      </div>

      <div class="form-group">
          <label for="traffiConditions">Traffic Conditions</label>
          <input name="traffiConditions" class="form-control"  rows="3" ref={register}/>
        </div>


      <div class="form-group">
          <label for="Route">Route</label>
          <textarea name="Route" class="form-control" rows="3" ref={register}></textarea>
        </div>

      <div class="form-group">
          <label for="time">Time</label>
          <input name="time" class="form-control" rows="3" ref={register}/>
        </div>

      <div class="form-group">
          <label for="AEUsed">Primary control operation</label>
          <textarea name="primaryControlOperation" class="form-control" rows="3" ref={register}></textarea>
        </div>

      <div class="form-group">
          <label for="awarenessTraffic">Awareness of/interaction with traffic environment</label>
          <textarea name="awarenessTraffic" class="form-control" rows="3" ref={register}></textarea>
        </div>

      <div class="form-group">
          <label for="adherenceLaw">Adherence to motor vehicle law</label>
          <textarea name="adherenceLaw" class="form-control" rows="3" ref={register}></textarea>
        </div>

        <div class="form-group">
            <label for="assessmentOther">Other comments</label>
            <textarea name="assessmentOther" class="form-control" rows="3" ref={register}></textarea>
          </div>

          <h1>Reconmendations</h1>

      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">Approved to drive</legend>
        <input name="approvedToDrive" type="checkbox" ref={register} />
      </div>

      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">Use of AE</legend>
        <input name="useOfAE" type="checkbox" ref={register} />
      </div>

      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">Training</legend>
        <input name="training" type="checkbox" ref={register} />
      </div>

      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">Road Test</legend>
        <input name="roadTest" type="checkbox" ref={register} />
      </div>

      <div class="form-group">
          <label for="reconmendationsOther">Other comments</label>
          <textarea name="reconmendationsOther" class="form-control" rows="3" ref={register}></textarea>
        </div>

    <h1>Vehicle and Adaptive Equipment Recommendations</h1>
    <div class="row">
       <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Lift/ Vehicle Access</legend></div>
       <div class="col-sm-1"><input name="LiftVehicleAcessCheckbox" type="checkbox" ref={register} /></div>
       <div class="col-sm-10">  {LiftVehicleAcessCheckbox && (
           <div>
             <input class="form-control" type="text" name="LiftVehicleAcessTextbox" rows="3" ref={register} />
           </div>
         )}</div>
   </div>

   <div class="row">
      <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Lift/ Transfer Board</legend></div>
      <div class="col-sm-1"><input name="LiftTransferBoardCheckbox" type="checkbox" ref={register} /></div>
      <div class="col-sm-10">
      {LiftTransferBoardCheckbox && (
          <div>
            <input class="form-control" type="text" name="LiftTransferBoardTextbox" rows="3" ref={register} />
          </div>
        )}</div>
  </div>

  <div class="row">
     <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Wheelchair Lift</legend></div>
     <div class="col-sm-1"><input name="WheelchairLiftCheckbox" type="checkbox" ref={register} /></div>
     <div class="col-sm-10">
     {WheelchairLiftCheckbox && (
         <div>
           <input class="form-control" type="text" name="WheelchairLiftTextbox" rows="3" ref={register} />
         </div>
       )}</div>
 </div>

 <div class="row">
    <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Ramp Assist</legend></div>
    <div class="col-sm-1"><input name="RampAssistCheckbox" type="checkbox" ref={register} /></div>
    <div class="col-sm-10">
    {RampAssistCheckbox && (
        <div>
          <input class="form-control" type="text" name="RampAssistTextbox" rows="3" ref={register} />
        </div>
      )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Occupied Wheelchair Restraint</legend></div>
   <div class="col-sm-1"><input name="OccupiedWheelchairRestraintCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {OccupiedWheelchairRestraintCheckbox && (
       <div>
         <input class="form-control" type="text" name="OccupiedWheelchairRestraintTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Head/ Backrest</legend></div>
   <div class="col-sm-1"><input name="HeadBackrestCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {HeadBackrestCheckbox && (
       <div>
         <input class="form-control" type="text" name="HeadBackrestTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Ramp</legend></div>
   <div class="col-sm-1"><input name="RampCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {RampCheckbox && (
       <div>
         <input class="form-control" type="text" name="RampTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Steps</legend></div>
   <div class="col-sm-1"><input name="StepsCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {StepsCheckbox && (
       <div>
         <input class="form-control" type="text" name="StepsTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Seat</legend></div>
   <div class="col-sm-1"><input name="SeatCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {SeatCheckbox && (
       <div>
         <input class="form-control" type="text" name="SeatTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Transfer Seat Base</legend></div>
   <div class="col-sm-1"><input name="TransferSeatBaseCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {TransferSeatBaseCheckbox && (
       <div>
         <input class="form-control" type="text" name="TransferSeatBaseTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

<div class="row">
   <div class="col-sm-1">  <legend class="col-form-label col-sm-2 pt-0">Docking Console</legend></div>
   <div class="col-sm-1"><input name="DockingConsoleCheckbox" type="checkbox" ref={register} /></div>
   <div class="col-sm-10">
   {DockingConsoleCheckbox && (
       <div>
         <input class="form-control" type="text" name="DockingConsoleTextbox" rows="3" ref={register} />
       </div>
     )}</div>
</div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
          Driver Evaluation and Training Program Notice
        </button>

        <div class="form-group">
        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">Driver Evaluation and Training Program Notice</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              Where applicable, equipment should meet or exceed the requirements established by the
              Department of Veteran's Affairs, Federal Motor Vehicle Safety Standards, Society of
              Automotive Engineers, and the National Mobility Dealers Association.
              Where applicable, the aftermarket vehicle modifiers/adaptive equipment manufacturers and
              their products are those known by the evaluator; any substitutions must be of equal use and
              value. Consultation with the evaluator is recommended if anything other than these are used.
              These recommendations should be considered valid for one (1) year from the date of the
              evaluation. Beyond that time a re-evaluation may be necessary.
              These recommendations have been developed based on the education and experienced of the
              evaluator and the client's experience in using the assessment/training equipment available at
              the Central Massachusetts Safety Council.
              The results and recommendations included in this report are based on the client's performance
              during the evaluation and should not be relied on as absolute predictors of future performance.
              The conclusions reached and the recommendations made in this report are based, in part,
              upon the medical information available at the time this report was written. If subsequent to
              issuance of this report the client's medical status changes in such a manner that may
              compromise the client's abilities as a driver the report can no longer be relied upon as valid.
              No person shall drive using adaptive equipment unless they have received documented
              instruction in the use thereof, with or without the owner's permission.
              ____________________________________________________________________
              Please contact me with any questions about the report and/or my recommendations. And
              thank you for the opportunity to work together.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>


      <div class="form-group">
          <label for="reconmendationsOther">Evaluated By</label>
          <input name="EvaluatorName" class="form-control" rows="3" ref={register}/>
        </div>

        <div class="form-group">
        <label htmlFor="dateOfBirth">Evaluation Date</label>
        <DatePicker
              isClearable
              name="evaluateDate"
              selected={evaluateDate}
              onChange={val => {
                setDate(val);
                setValue("evaluateDate", val)
              }}
            />
            {errors.date && <p>Evaluation date is required</p>}
        </div>
    <div class="form-group">
        <label for="sendTo">Send to</label>
        <input name="sendTo" class="form-control" rows="3" ref={register}/>
      </div>


    <input class="btn btn-primary" type="submit" />

  </form>


);
}
