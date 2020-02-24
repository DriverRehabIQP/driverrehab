import React from "react"

import { useForm } from "react-hook-form";
import '../App.css';
import "./index.css";
import Client from "./client";
import  { useState } from 'react';
import DatePicker from "react-datepicker";
import $ from "jquery";
import jsPDF from "jspdf";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";

export default function EvaluationForm(){
    

const { register, watch,setValue, handleSubmit, errors } = useForm();
  const onSubmit = data => {
  alert(JSON.stringify(data));
  };
  const [evaluateDate, setDate] = React.useState(null);
 const [fields, setFields] = useState([{ value: null }]); 

  React.useEffect(() => {
    register({ name: "evaluateDate" }, { required: true });
  }, []);


  var fileInput = document.querySelector('input[type="file"]');

  function read(callback) {
    var file = fileInput.files.item(0);
    var reader = new FileReader();

    reader.onload = function() {
      callback(reader.result);
    }

    reader.readAsText(file);
  }
  function ChangeItem(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      // The file's text will be printed here
      var pdfFile = e.target.result;
      console.log(pdfFile);




      var pos = pdfFile.indexOf("(Vehicle Used:) Tj");
      var pos1 = pdfFile.indexOf("(AE Used:) Tj");

      console.log(pos);
      console.log(pos1);
      //getting section with answer
      var res = pdfFile.slice(pos, pos1);
      console.log(res);


      var n = res.indexOf(") Tj");
      var pos2 = res.indexOf(") Tj", (n+3));
      var n1 = res.indexOf("(");
      var pos3 = res.indexOf("(", (n1)+2);


      console.log("position2");
      console.log(pos2);
      console.log(n);
      console.log("position3");
      console.log(pos3);


      var res1 = res.slice(pos3, pos2);
      console.log(res1);
      document.getElementById("vehicleUsed").value = res1;




      var ValueHeaders = ["(Vehicle Used:) Tj", "(AE Used:) Tj",  "(Weather Conditions:) Tj", "(Road Conditions:) Tj", "(Traffic Conditions:) Tj", "(Route:) Tj", "(Time:) Tj",  "(Primary control operation:) Tj" ,  "(Awareness of/interaction with traffic environment:) Tj",  "(Adherence to motor vehicle law:) Tj",  "(Other Comments:) Tj", "(Other comments:) Tj", "(Minivan:) Tj", "((Recommendations Other:) Tj:) Tj" , "(Evaluated By:) Tj" , "(Evaluated On:) Tj"];
      var ValueIds= ["vehicleUsed", "AEUsed" , "weather", "Road", "Trafic", "Route", "Time", "PrimaryControlOperation", "Awareness", "Adherence", "OtherComments1", "OtherComments2", "Minivan", "ReconmendationsOther",   "EvaluatedBy", "EvalDate"];

      for (let step = 0; step < 15; step++) {
         console.log(ValueHeaders[step]);

        var pos = pdfFile.indexOf(ValueHeaders[step]);
        var pos1 = pdfFile.indexOf(ValueHeaders[step+1]);

        console.log(pos);
        console.log(pos1);
        //getting section with answer
        var res = pdfFile.slice(pos, pos1);
        console.log(res);


        var n = res.indexOf(") Tj");
        var pos2 = res.indexOf(") Tj", (n+3));
        var n1 = res.indexOf("(");
        var pos3 = res.indexOf("(", (n1)+2);


        console.log("position2");
        console.log(pos2);
        console.log(n);
        console.log("position3");
        console.log(pos3);


        var res1 = res.slice((pos3+1), pos2);
        console.log(res1);
        document.getElementById(ValueIds[step]).value = res1;
      }
      //value needed between pos and pos1
    };

    reader.readAsText(file);
  }

  function NewDropDown() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }


  function RemoveDropDown(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }






  function generatePDF(event){
    var doc = new jsPDF();
     var bigtext = 55;
    var vehicleUsed = $('#vehicleUsed').val();
    var vehicleUsedlines =  doc.splitTextToSize(vehicleUsed, bigtext);
    var AEUsed = $('#AEUsed').val();
    var AEUsedlines =  doc.splitTextToSize(AEUsed, bigtext);
    var weather = $('#weather').val();
    var weatherlines =  doc.splitTextToSize(weather, bigtext);
    var road = $('#Road').val();
    var roadlines =  doc.splitTextToSize(road, bigtext);
    var traffic =$('#Trafic').val();
    var trafficlines =  doc.splitTextToSize(traffic, bigtext);
    var route = $('#Route').val();
    var routelines =  doc.splitTextToSize(route, bigtext);
    var time = $('#Time').val();
    var timelines =  doc.splitTextToSize(time, bigtext);
    var primaryControlOperation = $('#PrimaryControlOperation').val();
    var primaryControlOperationlines =  doc.splitTextToSize(primaryControlOperation, bigtext);
    var awarness= $('#Awareness').val();
    var awarnesslines =  doc.splitTextToSize(awarness, bigtext);
    var adherence= $('#Adherence').val();
    var adherencelines =  doc.splitTextToSize(adherence, bigtext);
    var otherComments= $('#OtherComments1').val();
    var otherCommentslines =  doc.splitTextToSize(otherComments, bigtext);
    var otherComments2= $('#OtherComments2').val();
    var otherComments2lines =  doc.splitTextToSize(otherComments2, bigtext);
    var minivan= $('#Minivan').val();
    var minivanlines =  doc.splitTextToSize(minivan, bigtext);
    var reconmendationsOther= $('#ReconmendationsOther').val();
    var recommendationslines =  doc.splitTextToSize(reconmendationsOther, bigtext);
    var evalDate= $('#EvalDate').val();
    var evalDatelines =  doc.splitTextToSize(evalDate, bigtext);
    var evaluatedBy= $('#EvaluatedBy').val();
    var evaluatedBylines =  doc.splitTextToSize(evaluatedBy, bigtext);
    var lineSpacing = 10;
    var cursorY = 55;
    var pageWrapInitialYPosition = 20;
    var pageHeight = doc.internal.pageSize.height;
    var cursor2Y = 20;

    doc.setFontSize(18);//25
    doc.text(70, 30, "Evaluation Form");
    doc.setFontSize(12);//17
    doc.text(30, 45, "In - Vehicle Assessment:");
    doc.text(45, cursorY, "Vehicle Used:")
    vehicleUsedlines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{
    doc.text(105, cursorY, lineText);
    }
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "AE Used:");
    }
    else{
    doc.text(45, cursorY + 10, "AE Used:");
    }
    AEUsedlines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{
    doc.text(105, cursorY + 10, lineText);
    }
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Weather Conditions:");
    }
    else{
    doc.text(45, cursorY + 20, "Weather Conditions:");
    }
    weatherlines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else {doc.text(105, cursorY + 20, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Road Conditions:");
    }
    else{
    doc.text(45, cursorY + 30, "Road Conditions:");
    }
    roadlines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else {doc.text(105, cursorY + 30, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Traffic Conditions:");
    }
    else{
    doc.text(45, cursorY + 40, "Traffic Conditions:");
    }
    trafficlines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{doc.text(105, cursorY + 40, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Route:");
    }
    else{
    doc.text(45, cursorY + 50, "Route:");
    }
    routelines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{doc.text(105, cursorY + 50, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Time:");
    }
    else{
    doc.text(45, cursorY + 60, "Time:");
    }
    timelines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{doc.text(105, cursorY + 60, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Primary Control Operation:")
    }
    else{
    doc.text(45, cursorY + 70, "Primary Control Operation:");
    }
    primaryControlOperationlines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{doc.text(105, cursorY + 70, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > 200) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Awareness of/interaction with traffic environment:");
    }
    else{
    doc.text(45, cursorY + 80, "Awareness of/interaction with traffic environment:");
    }
    awarnesslines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{doc.text(105, cursorY + 90, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > 200) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Adherence to motor vehicle law:");
    }
    else{
    doc.text(45, cursorY + 100, "Adherence to motor vehicle law:");
    }
    adherencelines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
    }
    else{doc.text(105, cursorY + 110, lineText);}
    cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Other Comments:");
    }
    else{
    doc.text(45, cursorY + 10, "Other Comments:");
    }
    otherCommentslines.forEach(lineText => {
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, lineText);
    }
    else{doc.text(105, cursorY + 120, lineText);}
    cursorY += lineSpacing;
    })

    doc.addPage();
    doc.text(30, cursor2Y, "Reconmendations:");
    doc.text(45, cursor2Y + 10, "Other Comments:")
    otherComments2lines.forEach(lineText => {
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursor2Y = pageWrapInitialYPosition;
      doc.text(105, cursor2Y, lineText);
    }
    else{doc.text(105, cursor2Y + 10, lineText);}
    cursor2Y += lineSpacing;
    })


    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursor2Y = pageWrapInitialYPosition;
      doc.text(45, cursor2Y, "Minivan:");
    }
    else{
    doc.text(45, cursor2Y + 20, "Minivan:");
    }
    minivanlines.forEach(lineText => {
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursor2Y = pageWrapInitialYPosition;
      doc.text(105, cursor2Y, lineText);
    }
    else{doc.text(105, cursor2Y + 30, lineText);}
    cursor2Y += lineSpacing;
    })
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(30, cursor2Y, "Vehicle and Adaptive Recommendations:");
    }
    else{
      doc.text(30, cursor2Y + 30, "Vehicle and Adaptive Recommendations:");
    }
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursor2Y, "Recommendations Other:");
    }
    else{
    doc.text(45, cursor2Y + 40, "Recommendations Other:");
    }
    recommendationslines.forEach(lineText => {
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursor2Y = pageWrapInitialYPosition;
    doc.text(105, cursor2Y, lineText);
    }
    else{doc.text(105, cursor2Y + 40, lineText);}
    cursor2Y += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursor2Y, "Evaluated By:");
    }
    else{
    doc.text(45, cursor2Y + 50, "Evaluated By:");
    }
    evaluatedBylines.forEach(lineText => {
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursor2Y = pageWrapInitialYPosition;
      doc.text(105, cursor2Y, lineText);
    }
    else{doc.text(105, cursor2Y + 50, lineText);}
    cursor2Y += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Evaluated On:");
    }
    else{
    doc.text(45, cursor2Y + 60, "Evaluated On:");
    }
    evalDatelines.forEach(lineText => {
    if (cursor2Y > pageHeight) { // Auto-paging
      doc.addPage();
      cursor2Y = pageWrapInitialYPosition;
      doc.text(105, cursor2Y, lineText);
    }
    else{doc.text(105, cursor2Y + 60, lineText);}
    cursor2Y += lineSpacing;
    })


    doc.save("DriverRehab.pdf");
  }


return (
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

<div className="float-left">
      {fields.map((field, idx) => {
        return (

          <div key={`${field}-${idx}`}>

          <select name="primaryControls" ref={register}>



<option value="Component3">->Link:  Lift /Transfer Seat </option>
<option value="Component4">->ASENTO – XL-SEAT:  Lift /Transfer Board</option>
<option value="Component5">->XL-BASE:  Pivoting & lowering seat base </option>
<option value="Component6">->XL-BOARD:  Lift/Transfer Board</option>
<option value="Component7">->Speedy-Lift:  Wheelchair Lift</option>
<option value="Component8">->Hi-Lift:  Wheelchair Lift</option>
<option value="Component9">->Power Pull:  Ramp Assist</option>
<option value="Component12">->PROTEKTOR® Wheelchair Restraints:  Occupied Wheelchair Restraint</option>
<option value="Component13">->Easy Pull:  Occupied Wheelchair Restraint/Ramp Assist</option>
<option value="Component14">->Hide-A-Way Wheelchair Securement Systems:  Occupied Wheelchair Restraint</option>
<option value="Component15">->eFutureSafe / FutureSafe:  Head/Backrest</option>
<option value="Component16">->Smart Ramp:  Ramp </option>
<option value="Component17">->Side Steps:  Steps</option>
<option value="Component18">->Smart Seats:  Seat</option>
<option value="Component20">->Comfort Series C62:  Transfer Seat Base: Minivan</option>
<option value="Component21">->Leadership 75:  Transfer Seat Base: Minivan</option>
<option value="Component22">->Leadership 41:  Transfer Seat Base: Full-size van</option>
<option value="Component23">->Comfort Series Special, CS62D:  Transfer Seat Base: Full-size van</option>
<option value="Component24">->Leadership 71:  Transfer Seat Base: Full-size van</option>
<option value="Component25">->HighTower® Docking System:  Docking Console</option>
<option value="Component26">->Unoccupied Wheelchair Restraint:  Unoccupied Wheelchair Restraint</option>
<option value="Component27">->https://www.braunability.com/us/en/commercial.html:  </option>
<option value="Component28">->Century 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component29">->Millennium 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component30">->Vista 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component31">->NL500 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component32">->NUVL855 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component34">->Joey:  Chair Lift </option>
<option value="Component35">->Curb-Sider:  Chair Lift</option>
<option value="Component36">->Out-Sider :  Chair Lift</option>
<option value="Component37">->Chariot:  Chair Lift</option>
<option value="Component38">->Big Lifter:  Chair Lift</option>
<option value="Component39">->Lifter :  Chair Lift</option>
<option value="Component40">->Space-Saver:  Chair Lift</option>
<option value="Component41">->Back-Saver:  Chair Lift </option>
<option value="Component42">->Out-Rider:  Chair Lift</option>
<option value="Component46">->Coach Lift:  Lift /Transfer Seat </option>
<option value="Component48">->Sensitized Steering :  </option>
<option value="Component49">->Sensitized braking :  </option>
<option value="Component50">->Backup Battery Systems:  </option>
<option value="Component51">->Electronic Parking Brake:  </option>
<option value="Component52">->Horizontal Steering:  </option>
<option value="Component53">->Pedal Extensions:  </option>
<option value="Component55">->Injection Molding:  </option>
<option value="Component57">->PGB Power Gas and Brake:  Power Gas and Brake</option>
<option value="Component58">->RESS Remote Electric Steering System:  Small diameter steering wheel</option>
<option value="Component59">->PROXIMA Tablet Touch Screen Console:  Tablet Touch Screen Console</option>
<option value="Component60">->VAS Visual/Audible Scan System:  In-Motion Tablet Touch Screen Console</option>
<option value="Component61">->GEN II (Modified Effort Electric Steering System):  Modified Effort Electric Steering</option>
<option value="Component62">->VEESS (Variable Effort Electric Steering System):  Variable Effort Electric Steering System</option>
<option value="Component63">->Pride Milford Person Lift:  Person Lift</option>
<option value="Component80">->Power step:  Step</option>
<option value="Component83">->Fuel Systems:  Structural</option>
<option value="Component84">->External Fuel Tanks:  Structural</option>
<option value="Component87">->BRAUNABILITY 2001-02 DODGE/CHRYSLER MINIVAN CONVERSION REPLACEMENT FUEL TANK ASSEMBLY:  Structural</option>
<option value="Component88">->BRAUNABILITY 1996-2000 DODGE/CHRYSLER MINIVAN CONVERSION REPLACEMENT FUEL TANK ASSEMBLY:  Structural</option>
<option value="Component89">->BRAUNABILITY MINIVAN CONVERSION REAR SUSPENSION KNEEL SYSTEM ACTUATOR ASSEMBLY KIT:  Kneel actuator</option>
<option value="Component90">->FERNO FLOOR MOUNT OXYGEN TANK HOLDER:  O2 tank holder</option>
<option value="Component91">->O2 ON THE GO OXYGEN TANK CYLINDER HOLDER:  O2 tank holder</option>
<option value="Component93">->FORD TRANSIT CONNECT REAR ENTRY RAMP ASSEMBLY:  Ramp</option>
<option value="Component94">->Step Flares:  Structural</option>
<option value="Component95">->Door Conversion Parts:  Structural</option>
<option value="Component96">->RAMP COVER DRIVERGE/MBW/DODGE/CHRYSLER:  Ramp</option>
<option value="Component97">->RAMP COVER TOYOTA SIENNA:  Ramp</option>
<option value="Component98">->Lift Replacement Parts:  Lift</option>
<option value="Component99">->Ramp Parts:  Ramp</option>
<option value="Component101">->STREETSIDE SEAT FOR SMARTFLOOR WITH SMARTLEG BASE:  Seat</option>
<option value="Component102">->SMARTFLOOR SEAT WITH SMARTLEG BASE, STREETSIDE (RIGHT SIDE):  Seat</option>
<option value="Component103">->SMARTSEAT W/CHILD RESTRAINT BRACKET, CURBSIDE:  Seat</option>
<option value="Component104">->SMARTFLOOR SEAT WITH SMARTLEG BASE:  Seat</option>
<option value="Component105">->FORD E-SERIES STATIONARY/RIGID MOUNT REAR STEP ASSEMBLY:  Step</option>
<option value="Component106">->STAINLESS STEEL DRIVER SIDE FRONT DOOR AND PASSENGER SIDE FRONT DOOR; SHORT STEP ASSEMBLY:  Step</option>
<option value="Component107">->STAINLESS STEEL CARGO DOOR LONG STEP ASSEMBLY:  Step</option>
<option value="Component110">->iClass™ Solid Platform (S):  Lift</option>
<option value="Component111">->iClass™ Folded Platform (F):  Lift</option>
<option value="Component112">->iClass™ Split Platform (SP):  Lift</option>
<option value="Component114">->Mini Electric Lift - Model 117:  Lift</option>
<option value="Component115">->Patriotic Electric Lift - Model US208:  Lift</option>
<option value="Component116">->Lift n' Go Electric Lift - Model 210:  Lift</option>
<option value="Component117">->Hold n' Go Electric Lift - Model US218:  Lift</option>
<option value="Component118">->XL Electric Lift - Model XL4:  Lift</option>
<option value="Component120">->Tote - Model 003:  Lift</option>
<option value="Component121">->Tilt n' Tote - Model 001:  Lift</option>
<option value="Component122">->Electric Tilt n' Tote - Model 101:  Lift</option>
		value={field.value}
              onChange={e => ChangeItem(idx, e)}
          </select>
&nbsp;&nbsp;&nbsp;
            <input
              type="text"
style={{width: "370px"}}
	      value={field.value}

              onChange={e => ChangeItem(idx, e)}
            />
            <button type="button" onClick={() => RemoveDropDown(idx)}>
              X
            </button>  &nbsp;&nbsp;&nbsp;
<button type="button" onClick={() => NewDropDown()}>
        +
      </button>
          <br /><br />
        </div>
        );
      })}
    </div>


      <br /><br />
<h5 for="secondaryControls">Secondary controls, in motion, menu type system, access through left elbow or head switch,
determined during initial training session </h5>
           <div className="float-left">
      {fields.map((field, idx) => {
        return (

          <div key={`${field}-${idx}`}>

          <select name="primaryControls" ref={register}>



<option value="Component3">->Link:  Lift /Transfer Seat </option>
<option value="Component4">->ASENTO – XL-SEAT:  Lift /Transfer Board</option>
<option value="Component5">->XL-BASE:  Pivoting & lowering seat base </option>
<option value="Component6">->XL-BOARD:  Lift/Transfer Board</option>
<option value="Component7">->Speedy-Lift:  Wheelchair Lift</option>
<option value="Component8">->Hi-Lift:  Wheelchair Lift</option>
<option value="Component9">->Power Pull:  Ramp Assist</option>
<option value="Component12">->PROTEKTOR® Wheelchair Restraints:  Occupied Wheelchair Restraint</option>
<option value="Component13">->Easy Pull:  Occupied Wheelchair Restraint/Ramp Assist</option>
<option value="Component14">->Hide-A-Way Wheelchair Securement Systems:  Occupied Wheelchair Restraint</option>
<option value="Component15">->eFutureSafe / FutureSafe:  Head/Backrest</option>
<option value="Component16">->Smart Ramp:  Ramp </option>
<option value="Component17">->Side Steps:  Steps</option>
<option value="Component18">->Smart Seats:  Seat</option>
<option value="Component20">->Comfort Series C62:  Transfer Seat Base: Minivan</option>
<option value="Component21">->Leadership 75:  Transfer Seat Base: Minivan</option>
<option value="Component22">->Leadership 41:  Transfer Seat Base: Full-size van</option>
<option value="Component23">->Comfort Series Special, CS62D:  Transfer Seat Base: Full-size van</option>
<option value="Component24">->Leadership 71:  Transfer Seat Base: Full-size van</option>
<option value="Component25">->HighTower® Docking System:  Docking Console</option>
<option value="Component26">->Unoccupied Wheelchair Restraint:  Unoccupied Wheelchair Restraint</option>
<option value="Component27">->https://www.braunability.com/us/en/commercial.html:  </option>
<option value="Component28">->Century 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component29">->Millennium 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component30">->Vista 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component31">->NL500 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component32">->NUVL855 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component34">->Joey:  Chair Lift </option>
<option value="Component35">->Curb-Sider:  Chair Lift</option>
<option value="Component36">->Out-Sider :  Chair Lift</option>
<option value="Component37">->Chariot:  Chair Lift</option>
<option value="Component38">->Big Lifter:  Chair Lift</option>
<option value="Component39">->Lifter :  Chair Lift</option>
<option value="Component40">->Space-Saver:  Chair Lift</option>
<option value="Component41">->Back-Saver:  Chair Lift </option>
<option value="Component42">->Out-Rider:  Chair Lift</option>
<option value="Component46">->Coach Lift:  Lift /Transfer Seat </option>
<option value="Component48">->Sensitized Steering :  </option>
<option value="Component49">->Sensitized braking :  </option>
<option value="Component50">->Backup Battery Systems:  </option>
<option value="Component51">->Electronic Parking Brake:  </option>
<option value="Component52">->Horizontal Steering:  </option>
<option value="Component53">->Pedal Extensions:  </option>
<option value="Component55">->Injection Molding:  </option>
<option value="Component57">->PGB Power Gas and Brake:  Power Gas and Brake</option>
<option value="Component58">->RESS Remote Electric Steering System:  Small diameter steering wheel</option>
<option value="Component59">->PROXIMA Tablet Touch Screen Console:  Tablet Touch Screen Console</option>
<option value="Component60">->VAS Visual/Audible Scan System:  In-Motion Tablet Touch Screen Console</option>
<option value="Component61">->GEN II (Modified Effort Electric Steering System):  Modified Effort Electric Steering</option>
<option value="Component62">->VEESS (Variable Effort Electric Steering System):  Variable Effort Electric Steering System</option>
<option value="Component63">->Pride Milford Person Lift:  Person Lift</option>
<option value="Component80">->Power step:  Step</option>
<option value="Component83">->Fuel Systems:  Structural</option>
<option value="Component84">->External Fuel Tanks:  Structural</option>
<option value="Component87">->BRAUNABILITY 2001-02 DODGE/CHRYSLER MINIVAN CONVERSION REPLACEMENT FUEL TANK ASSEMBLY:  Structural</option>
<option value="Component88">->BRAUNABILITY 1996-2000 DODGE/CHRYSLER MINIVAN CONVERSION REPLACEMENT FUEL TANK ASSEMBLY:  Structural</option>
<option value="Component89">->BRAUNABILITY MINIVAN CONVERSION REAR SUSPENSION KNEEL SYSTEM ACTUATOR ASSEMBLY KIT:  Kneel actuator</option>
<option value="Component90">->FERNO FLOOR MOUNT OXYGEN TANK HOLDER:  O2 tank holder</option>
<option value="Component91">->O2 ON THE GO OXYGEN TANK CYLINDER HOLDER:  O2 tank holder</option>
<option value="Component93">->FORD TRANSIT CONNECT REAR ENTRY RAMP ASSEMBLY:  Ramp</option>
<option value="Component94">->Step Flares:  Structural</option>
<option value="Component95">->Door Conversion Parts:  Structural</option>
<option value="Component96">->RAMP COVER DRIVERGE/MBW/DODGE/CHRYSLER:  Ramp</option>
<option value="Component97">->RAMP COVER TOYOTA SIENNA:  Ramp</option>
<option value="Component98">->Lift Replacement Parts:  Lift</option>
<option value="Component99">->Ramp Parts:  Ramp</option>
<option value="Component101">->STREETSIDE SEAT FOR SMARTFLOOR WITH SMARTLEG BASE:  Seat</option>
<option value="Component102">->SMARTFLOOR SEAT WITH SMARTLEG BASE, STREETSIDE (RIGHT SIDE):  Seat</option>
<option value="Component103">->SMARTSEAT W/CHILD RESTRAINT BRACKET, CURBSIDE:  Seat</option>
<option value="Component104">->SMARTFLOOR SEAT WITH SMARTLEG BASE:  Seat</option>
<option value="Component105">->FORD E-SERIES STATIONARY/RIGID MOUNT REAR STEP ASSEMBLY:  Step</option>
<option value="Component106">->STAINLESS STEEL DRIVER SIDE FRONT DOOR AND PASSENGER SIDE FRONT DOOR; SHORT STEP ASSEMBLY:  Step</option>
<option value="Component107">->STAINLESS STEEL CARGO DOOR LONG STEP ASSEMBLY:  Step</option>
<option value="Component110">->iClass™ Solid Platform (S):  Lift</option>
<option value="Component111">->iClass™ Folded Platform (F):  Lift</option>
<option value="Component112">->iClass™ Split Platform (SP):  Lift</option>
<option value="Component114">->Mini Electric Lift - Model 117:  Lift</option>
<option value="Component115">->Patriotic Electric Lift - Model US208:  Lift</option>
<option value="Component116">->Lift n' Go Electric Lift - Model 210:  Lift</option>
<option value="Component117">->Hold n' Go Electric Lift - Model US218:  Lift</option>
<option value="Component118">->XL Electric Lift - Model XL4:  Lift</option>
<option value="Component120">->Tote - Model 003:  Lift</option>
<option value="Component121">->Tilt n' Tote - Model 001:  Lift</option>
<option value="Component122">->Electric Tilt n' Tote - Model 101:  Lift</option>
		value={field.value}
              onChange={e => ChangeItem(idx, e)}
          </select>
&nbsp;&nbsp;&nbsp;
            <input
              type="text"
style={{width: "370px"}}
	      value={field.value}

              onChange={e => ChangeItem(idx, e)}
            />
            <button type="button" onClick={() => RemoveDropDown(idx)}>
              X
            </button>  &nbsp;&nbsp;&nbsp;
<button type="button" onClick={() => NewDropDown()}>
        +
      </button>
          <br /><br />
        </div>
        );
      })}
    </div>





      <br /><br />
<h5 for="secondaryControls">Secondary controls-other </h5>
           <div className="float-left">
      {fields.map((field, idx) => {
        return (

          <div key={`${field}-${idx}`}>

          <select name="primaryControls" ref={register}>



<option value="Component3">->Link:  Lift /Transfer Seat </option>
<option value="Component4">->ASENTO – XL-SEAT:  Lift /Transfer Board</option>
<option value="Component5">->XL-BASE:  Pivoting & lowering seat base </option>
<option value="Component6">->XL-BOARD:  Lift/Transfer Board</option>
<option value="Component7">->Speedy-Lift:  Wheelchair Lift</option>
<option value="Component8">->Hi-Lift:  Wheelchair Lift</option>
<option value="Component9">->Power Pull:  Ramp Assist</option>
<option value="Component12">->PROTEKTOR® Wheelchair Restraints:  Occupied Wheelchair Restraint</option>
<option value="Component13">->Easy Pull:  Occupied Wheelchair Restraint/Ramp Assist</option>
<option value="Component14">->Hide-A-Way Wheelchair Securement Systems:  Occupied Wheelchair Restraint</option>
<option value="Component15">->eFutureSafe / FutureSafe:  Head/Backrest</option>
<option value="Component16">->Smart Ramp:  Ramp </option>
<option value="Component17">->Side Steps:  Steps</option>
<option value="Component18">->Smart Seats:  Seat</option>
<option value="Component20">->Comfort Series C62:  Transfer Seat Base: Minivan</option>
<option value="Component21">->Leadership 75:  Transfer Seat Base: Minivan</option>
<option value="Component22">->Leadership 41:  Transfer Seat Base: Full-size van</option>
<option value="Component23">->Comfort Series Special, CS62D:  Transfer Seat Base: Full-size van</option>
<option value="Component24">->Leadership 71:  Transfer Seat Base: Full-size van</option>
<option value="Component25">->HighTower® Docking System:  Docking Console</option>
<option value="Component26">->Unoccupied Wheelchair Restraint:  Unoccupied Wheelchair Restraint</option>
<option value="Component27">->https://www.braunability.com/us/en/commercial.html:  </option>
<option value="Component28">->Century 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component29">->Millennium 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component30">->Vista 2 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component31">->NL500 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component32">->NUVL855 Wheelchair Lift:  Wheelchair Lift</option>
<option value="Component34">->Joey:  Chair Lift </option>
<option value="Component35">->Curb-Sider:  Chair Lift</option>
<option value="Component36">->Out-Sider :  Chair Lift</option>
<option value="Component37">->Chariot:  Chair Lift</option>
<option value="Component38">->Big Lifter:  Chair Lift</option>
<option value="Component39">->Lifter :  Chair Lift</option>
<option value="Component40">->Space-Saver:  Chair Lift</option>
<option value="Component41">->Back-Saver:  Chair Lift </option>
<option value="Component42">->Out-Rider:  Chair Lift</option>
<option value="Component46">->Coach Lift:  Lift /Transfer Seat </option>
<option value="Component48">->Sensitized Steering :  </option>
<option value="Component49">->Sensitized braking :  </option>
<option value="Component50">->Backup Battery Systems:  </option>
<option value="Component51">->Electronic Parking Brake:  </option>
<option value="Component52">->Horizontal Steering:  </option>
<option value="Component53">->Pedal Extensions:  </option>
<option value="Component55">->Injection Molding:  </option>
<option value="Component57">->PGB Power Gas and Brake:  Power Gas and Brake</option>
<option value="Component58">->RESS Remote Electric Steering System:  Small diameter steering wheel</option>
<option value="Component59">->PROXIMA Tablet Touch Screen Console:  Tablet Touch Screen Console</option>
<option value="Component60">->VAS Visual/Audible Scan System:  In-Motion Tablet Touch Screen Console</option>
<option value="Component61">->GEN II (Modified Effort Electric Steering System):  Modified Effort Electric Steering</option>
<option value="Component62">->VEESS (Variable Effort Electric Steering System):  Variable Effort Electric Steering System</option>
<option value="Component63">->Pride Milford Person Lift:  Person Lift</option>
<option value="Component80">->Power step:  Step</option>
<option value="Component83">->Fuel Systems:  Structural</option>
<option value="Component84">->External Fuel Tanks:  Structural</option>
<option value="Component87">->BRAUNABILITY 2001-02 DODGE/CHRYSLER MINIVAN CONVERSION REPLACEMENT FUEL TANK ASSEMBLY:  Structural</option>
<option value="Component88">->BRAUNABILITY 1996-2000 DODGE/CHRYSLER MINIVAN CONVERSION REPLACEMENT FUEL TANK ASSEMBLY:  Structural</option>
<option value="Component89">->BRAUNABILITY MINIVAN CONVERSION REAR SUSPENSION KNEEL SYSTEM ACTUATOR ASSEMBLY KIT:  Kneel actuator</option>
<option value="Component90">->FERNO FLOOR MOUNT OXYGEN TANK HOLDER:  O2 tank holder</option>
<option value="Component91">->O2 ON THE GO OXYGEN TANK CYLINDER HOLDER:  O2 tank holder</option>
<option value="Component93">->FORD TRANSIT CONNECT REAR ENTRY RAMP ASSEMBLY:  Ramp</option>
<option value="Component94">->Step Flares:  Structural</option>
<option value="Component95">->Door Conversion Parts:  Structural</option>
<option value="Component96">->RAMP COVER DRIVERGE/MBW/DODGE/CHRYSLER:  Ramp</option>
<option value="Component97">->RAMP COVER TOYOTA SIENNA:  Ramp</option>
<option value="Component98">->Lift Replacement Parts:  Lift</option>
<option value="Component99">->Ramp Parts:  Ramp</option>
<option value="Component101">->STREETSIDE SEAT FOR SMARTFLOOR WITH SMARTLEG BASE:  Seat</option>
<option value="Component102">->SMARTFLOOR SEAT WITH SMARTLEG BASE, STREETSIDE (RIGHT SIDE):  Seat</option>
<option value="Component103">->SMARTSEAT W/CHILD RESTRAINT BRACKET, CURBSIDE:  Seat</option>
<option value="Component104">->SMARTFLOOR SEAT WITH SMARTLEG BASE:  Seat</option>
<option value="Component105">->FORD E-SERIES STATIONARY/RIGID MOUNT REAR STEP ASSEMBLY:  Step</option>
<option value="Component106">->STAINLESS STEEL DRIVER SIDE FRONT DOOR AND PASSENGER SIDE FRONT DOOR; SHORT STEP ASSEMBLY:  Step</option>
<option value="Component107">->STAINLESS STEEL CARGO DOOR LONG STEP ASSEMBLY:  Step</option>
<option value="Component110">->iClass™ Solid Platform (S):  Lift</option>
<option value="Component111">->iClass™ Folded Platform (F):  Lift</option>
<option value="Component112">->iClass™ Split Platform (SP):  Lift</option>
<option value="Component114">->Mini Electric Lift - Model 117:  Lift</option>
<option value="Component115">->Patriotic Electric Lift - Model US208:  Lift</option>
<option value="Component116">->Lift n' Go Electric Lift - Model 210:  Lift</option>
<option value="Component117">->Hold n' Go Electric Lift - Model US218:  Lift</option>
<option value="Component118">->XL Electric Lift - Model XL4:  Lift</option>
<option value="Component120">->Tote - Model 003:  Lift</option>
<option value="Component121">->Tilt n' Tote - Model 001:  Lift</option>
<option value="Component122">->Electric Tilt n' Tote - Model 101:  Lift</option>
		value={field.value}
              onChange={e => ChangeItem(idx, e)}
          </select>
&nbsp;&nbsp;&nbsp;
            <input
              type="text"
style={{width: "370px"}}
	      value={field.value}

              onChange={e => ChangeItem(idx, e)}
            />
            <button type="button" onClick={() => RemoveDropDown(idx)}>
              X
            </button>  &nbsp;&nbsp;&nbsp;
<button type="button" onClick={() => NewDropDown()}>
        +
      </button>
          <br /><br />
        </div>
        );
      })}
    </div>


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

    <input class="btn btn-primary" type="submit" /> &nbsp;&nbsp;

    <button className="btn btn-primary" onClick={e => generatePDF()}> Generate PDF</button>

      <input  type="file" name="firstName" onChange={handleChange} />


  </form>

);
}
