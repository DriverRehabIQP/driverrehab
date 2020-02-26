import React from "react"
//edit
import { useForm } from "react-hook-form";
// import '../App.css';
// import "./index.css";
import Client from "./client";
import  { useState } from 'react';
import DatePicker from "react-datepicker";
import $ from "jquery";
import jsPDF from "jspdf";

import "react-datepicker/dist/react-datepicker.css";
import ReactFileReader from 'react-file-reader';
import * as XLSX from 'xlsx';
import axios from 'axios';
import Select from 'react-select';

export default function EvaluationForm(){

  const [items, setItems] = React.useState([
        { label: "test", value: "test" },
      ]);

  const [secondaryItems, setSecondaryItems] = React.useState([
        { label: "test", value: "test" },
      ]);



const { register, watch,setValue, handleSubmit, errors } = useForm();
  const onSubmit = data => {
  alert(JSON.stringify(data));
  };
  const [evaluateDate, setDate] = React.useState(null);
  React.useEffect(() => {
    console.log("STARTING");
    axios
     .get('https://raw.githubusercontent.com/DriverRehabIQP/driverrehab/evaluation-form-checkboxes-version/PrimaryControlsCarEquipments.csv')
     .then(res => {
       console.log("PRIMARY DROPDOWNS-------------------------")
       console.log(res.data);
       var data= res.data.split("\n");
       var result = [];
       for(var i=1;i<data.length-1;i++){
         // var currentline=lines[i].split(",");
         var obj = {label: data[i], value: data[i]};
         // console.log(data[i])
         result.push(obj)
       };
       result.sort();
       setItems(result);
      })
       .catch(err => {
         console.log(err)
         console.log("Error from Show Car parts detail");
     })

     // secondary controls
     axios
      .get('https://raw.githubusercontent.com/DriverRehabIQP/driverrehab/evaluation-form-checkboxes-version/SecondaryControlsCarEquipments.csv')
      .then(res => {
        console.log("SECONDARY DROPDOWNS-------------------------")
        console.log(res.data);
        var data= res.data.split("\n");
        var result = [];
        for(var i=1;i<data.length-1;i++){
          var obj = {label: data[i], value: data[i]};
          result.push(obj)
        };
        result.sort();
        setSecondaryItems(result);
       })
        .catch(err => {
          console.log(err)
          console.log("Error from Show Car parts detail");
      })
 }, []);

// SECONDARY values
const [secondaryAllValues, setSecondaryAllValues] = useState({});
function NewSecondaryDropDown(i) {
  console.log("inside add function")
  console.log(i)
    setSecondaryAllValues({
      ...secondaryAllValues,
      [i]: {
        dropdownVal: null,
        textboxVal: null
      }
    });
  console.log(secondaryAllValues)
}

function RemoveSecondaryDropDown(i) {
  const newState = { ...secondaryAllValues };
  delete newState[i];
  setSecondaryAllValues(newState);
}

function ChangeSecondaryItem(i, event) {
  setSecondaryAllValues({
    ...secondaryAllValues,
    [i]: { ...secondaryAllValues[i], textboxVal: event.target.value }
  });
  console.log("change items")
  console.log(secondaryAllValues)
}

function HandleSecondarySelect(i, selectedOptions) {
  setSecondaryAllValues({
    ...secondaryAllValues,
    [i]: { ...secondaryAllValues[i], dropdownVal: selectedOptions }
  });
  console.log("Handle select")
  console.log(secondaryAllValues)
}



// PRIMARY VALUES
  const [primaryAllValues, setPrimaryAllValues] = useState({});
  function NewPrimaryDropDown(i) {
    console.log("inside add function")
    console.log(i)
      setPrimaryAllValues({
        ...primaryAllValues,
        [i]: {
          dropdownVal: null,
          textboxVal: null
        }
      });
    console.log(primaryAllValues)
  }

  function RemovePrimaryDropDown(i) {
    const newState = { ...primaryAllValues };
    delete newState[i];
    setPrimaryAllValues(newState);
  }

  function ChangeItem(i, event) {
    setPrimaryAllValues({
      ...primaryAllValues,
      [i]: { ...primaryAllValues[i], textboxVal: event.target.value }
    });
    console.log("change items")
    console.log(primaryAllValues)
  }

  function HandleSelect(i, selectedOptions) {
    setPrimaryAllValues({
      ...primaryAllValues,
      [i]: { ...primaryAllValues[i], dropdownVal: selectedOptions }
    });
    console.log("Handle select")
    console.log(primaryAllValues)
  }

  function generatePDF(event){
    // get values from dropdown
    var curArr= Object.keys(primaryAllValues);
    for(var i=0;i<curArr.length;i++){
      console.log("textbox")
      // HOW YOU GET VALUE FROM DROPDOWN
      var dropdown = console.log(primaryAllValues[curArr[i]].dropdownVal.label)
      // HOW YOU GET VALUE FROM TEXTBOX
      console.log("dropdownVal")
      var textbox = console.log(primaryAllValues[curArr[i]].textboxVal)

    };

    // get values from dropdown
    var curSecondaryArr= Object.keys(secondaryAllValues);
    for(var i=0;i<curArr.length;i++){
      console.log("textbox")
      // HOW YOU GET VALUE FROM DROPDOWN
      var dropdown = console.log(secondaryAllValues[curSecondaryArr[i]].dropdownVal.label)
      // HOW YOU GET VALUE FROM TEXTBOX
      console.log("dropdownVal")
      var textbox = console.log(secondaryAllValues[curSecondaryArr[i]].textboxVal)

    };

    var doc = new jsPDF();
    var vehicleUsed = $('#vehicleUsed').val();
    var AEUsed = $('#AEUsed').val();
    var weather = $('#weather').val();
    var road = $('#Road').val();
    var traffic =$('#Trafic').val();
    var route = $('#Route').val();
    var time = $('#Time').val();
    var primaryControlOperation = $('#PrimaryControlOperation').val();
    var awarness= $('#Awareness').val();
    var adherence= $('#Adherence').val();
    var otherComments= $('#OtherComments1').val();
    var otherComments2= $('#OtherComments2').val();
    var minivan= $('#Minivan').val();
    var reconmendationsOther= $('#ReconmendationsOther').val();
    var evalDate= $('#EvalDate').val();
    var evaluatedBy= $('#EvaluatedBy').val();


    doc.setFontSize(25);
    doc.text(70, 30, "Evaluation Form");
    doc.setFontSize(17);
    doc.text(30, 45, "In - Vehicle Assessment:");
    doc.text(45, 55, "Vehicle Used:")
    doc.text(105, 55, vehicleUsed);
    doc.text(45, 65, "AE Used:")
    doc.text(105, 65, AEUsed);
    doc.text(45, 75, "Weather Conditions:")
    doc.text(105, 75, weather);
    doc.text(45, 85, "Road Conditions:")
    doc.text(105, 85, road);
    doc.text(45, 95, "Traffic Conditions:")
    doc.text(105, 95, traffic);
    doc.text(45, 105, "Route:")
    doc.text(105, 105, route);
    doc.text(45, 115, "Time:")
    doc.text(105, 115, time);
    doc.text(45, 125, "Primary control operation:")
    doc.text(105, 125, primaryControlOperation);
    doc.text(45, 135, "Awareness of/interaction with traffic environment:")
    doc.text(105, 135, awarness);
    doc.text(45, 145, "Adherence to motor vehicle law:")
    doc.text(105, 145, adherence);
    doc.text(45, 155, "Other Comments:")
    doc.text(105, 155, otherComments);

    doc.text(30, 170, "Reconmendations:");
    doc.text(45, 180, "Other Comments:")
    doc.text(105, 180, otherComments2);
    doc.text(30, 195, "Vehicle and Adaptive Equipment Recommendations:");
    doc.text(45, 205, "Minivan:")
    doc.text(105, 205, minivan);
    doc.text(45, 215, "Reconmendations other:")
    doc.text(105, 215, reconmendationsOther);
    doc.text(45, 235, "Evaluated on:")
    doc.text(105, 235, evalDate);
    doc.text(45, 225, "Evaluated by:")
    doc.text(105, 225, evaluatedBy);
    // doc.save("DriverRehab.pdf");
  }
  const generalStyles = {
     marginLeft: '20px',
     marginRight: '20px',
   };
return (
  <div style={generalStyles}>
  <form onSubmit={handleSubmit(onSubmit)}>
  <h1>In-vehicle Assessment</h1>
  <div class="form-group">
    <label htmlFor="vehicleUsed">Vehicle used</label>
    <input class="form-control" id="vehicleUsed" name="vehicleUsed" ref={register}  />
  </div>
    <div class="form-group">
        <label for="AEUsed">AE used</label>
        <input name="AEUsed" class="form-control" id="AEUsed" rows="3" ref={register}></input>
      </div>
  <div class="form-group">
      <label for="weatherConditions">Weather Conditions</label>
      <input name="weatherConditions" id="weather" class="form-control"  rows="3" ref={register}/>
    </div>
  <div class="form-group">
      <label for="roadConditions">Road Conditions</label>
      <input name="roadConditions" class="form-control" id="Road"  rows="3" ref={register}/>
    </div>
  <div class="form-group">
      <label for="traffiConditions">Trafic Conditions</label>
      <input name="traffiConditions" class="form-control"  id="Trafic" rows="3" ref={register}/>
    </div>
  <div class="form-group">
      <label for="AEUsed">Route</label>
      <input name="Route" class="form-control" id="Route" rows="3" ref={register}></input>
    </div>
  <div class="form-group">
      <label for="time">Time</label>
      <input name="time" class="form-control" id="Time" rows="3" ref={register}/>
    </div>
  <div class="form-group">
      <label for="AEUsed">Primary control operation</label>
      <input name="primaryControlOperation"  class="form-control" id="PrimaryControlOperation" rows="3" ref={register}/>
    </div>
  <div class="form-group">
      <label for="awarenessTraffic">Awareness of/interaction with traffic environment</label>
      <input name="awarenessTraffic" class="form-control" id="Awareness" rows="3" ref={register}/>
    </div>
  <div class="form-group">
      <label for="adherenceLaw">Adherence to motor vehicle law</label>
      <input name="adherenceLaw" class="form-control" id="Adherence" rows="3" ref={register}/>
    </div>
  <div class="form-group">
    <label for="assessmentOther">Other comments</label>
    <input name="assessmentOther"  class="form-control" id="OtherComments1" rows="3" ref={register}/>
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
          <input name="reconmendationsOther"  class="form-control" id="OtherComments2" rows="3" ref={register}/>
        </div>

    <h1>Vehicle and Adaptive Equipment Recommendations</h1>

    <div class="form-group">
        <label for="Minivan">Minivan</label>
        <input name="Minivan" class="form-control" id="Minivan" rows="3" ref={register}/>
      </div>


<h5 for="primaryControls ">Primary Controls: </h5>

{Object.keys(primaryAllValues).map((field) => {
  return (
<div class="container">
    <div class="row">
        <div class="col-sm-6">
        <div key={`${field}-${field}`}></div>
        <Select options={items } class="PrimaryClass" name="primaryControls" ref={register}
        onChange={e=>HandleSelect(field, e)}
        />
        </div>
        <div class="col-sm-4">
        <input
        class="form-control"
          type="text"
            style={{width: "370px"}}
               value={field.value}
          onChange={e => ChangeItem(field, e)}
        />
        </div>
        <div class="col-sm-2">
        <button type="button" onClick={() => RemovePrimaryDropDown(field)}>
          X
        </button>

        </div>
        <div class="col-sm-1">
        </div>
    </div>
</div>
);
})}

<button type="button" onClick={() => NewPrimaryDropDown(Object.keys(primaryAllValues).length)}>
+
</button>

<h5 for="secondaryControls">Secondary controls, in motion, menu type system, access through left elbow or head switch,
determined during initial training session </h5>
{Object.keys(secondaryAllValues).map((field) => {
  return (
<div class="container">
    <div class="row">
        <div class="col-sm-6">
        <div key={`${field}-${field}`}></div>
        <Select  onChange={e=>HandleSecondarySelect(field, e)} options={secondaryItems } name="primaryControls" ref={register}/>
        </div>
        <div class="col-sm-4">
        <input
        class="form-control"
          type="text"
            style={{width: "370px"}}
               value={field.value}
          onChange={e => ChangeSecondaryItem(field, e)}
        />
        </div>
        <div class="col-sm-2">
        <button type="button" onClick={() => RemoveSecondaryDropDown(field)}>
          X
        </button>

        </div>
        <div class="col-sm-1">

        </div>
    </div>
</div>
);
})}
<button type="button" onClick={() => NewSecondaryDropDown(Object.keys(secondaryAllValues).length)}>
+
</button>

      <div class="form-group">
          <label for="reconmendationsOther">Reconmendations other</label>

          <input name="reconmendationsOther" class="form-control"  id="ReconmendationsOther" rows="3" ref={register}/>
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
          <input name="EvaluatorName" class="form-control" id="EvaluatedBy" rows="3" ref={register}/>
        </div>

        <div class="form-group">
        <label htmlFor="dateOfBirth">Evaluation Date</label>
        <DatePicker
              isClearable
              name="evaluateDate"
              selected={evaluateDate}
	      id = "EvalDate"
              onChange={val => {
                setDate(val);
                setValue("evaluateDate", val)
              }}
            />
            {errors.date && <p>Evaluation date is required</p>}
        </div>
    <button class="btn btn-primary" onClick={e => generatePDF()}> Generate PDF </button>
  </form>
  </div>
);
}
