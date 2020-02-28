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
import ReactFileReader from 'react-file-reader';

import * as XLSX from 'xlsx';
import axios from 'axios';
import Select from 'react-select';


export default function EvaluationForm(){



  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const [primaryFields, setprimaryFields] = useState([{ value: null }]);
  const [secondaryFields, setSecondaryFields] = useState([{ value: null }]);
  const [items, setItems] = React.useState([
    { label: "test", value: "test" },
  ]);

  const [secondaryItems, setSecondaryItems] = React.useState([
    { label: "test", value: "test" },
  ]);


  const { register, watch,setValue, handleSubmit, errors } = useForm();

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

  const [fields, setFields] = useState([{ value: null }]);

  React.useEffect(() => {
    register({ name: "evaluateDate" }, { required: true });
  }, []);




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


      var ValueHeaders = ["(Name:) Tj", "(Address:) Tj" , "(Date of Birth:) Tj", "(Telephone:) Tj", "(Diagnosis:) Tj", "(Referred by:) Tj", "(Report Date:) Tj" ,"(Sent Date:) Tj", "(Comment:) Tj", "(Medical Clearence to drive?) Tj", "(uses prescription Medecine?) Tj" , "(Independent Transfer?) Tj", "(License Status:) Tj", "(Mobility Device:) Tj" ,"(License Expiration:) Tj", "(License Number:) Tj", "(License Restrictions:) Tj", "(Currently Driving) Tj", "(Current Vehicle:) Tj", "(Current adaptive equipment(AE)) Tj",  "(Last eye exam:) Tj", "(Left upper extremity:) Tj", "(Right upper extremity:) Tj", "(Left Lower extremity:) Tj", "(Right Lower extremity:) Tj", "(Other:) Tj", "(Driving History:) Tj", "(Clinical Information:) Tj", "(Comments:) Tj", "(Vehicle used:) Tj", "(AE Used:) Tj",  "(Weather Conditions:) Tj", "(Road Conditions:) Tj", "(Traffic Conditions:) Tj", "(Route:) Tj", "(Time:) Tj",  "(Primary Control Operation:) Tj" ,  "(Awareness of/interaction with traffic environment:) Tj",  "(Adherence to motor vehicle law:) Tj",  "(Other Comments:) Tj", "(Approved To Drive:) Tj", "(Use of AE:) Tj", "(Training:) Tj",  "(Road Test:) Tj",    "(Other comments:) Tj", "(Minivan:) Tj",  "((Recommendations Other:) Tj:) Tj" , "(Evaluated By:) Tj" , "(Evaluated On:) Tj"]; //"(Primary Controls) Tj" ,   "(Secondary Controls) Tj"

//accomdate multiple lines
      //fix up placing in che
      // var ValueHeaders = ["(Vehicle Used:) Tj", "(AE Used:) Tj",  "(Weather Conditions:) Tj", "(Road Conditions:) Tj", "(Traffic Conditions:) Tj", "(Route:) Tj", "(Time:) Tj",  "(Primary Control Operation:) Tj" ,  "(Awareness of/interaction with traffic environment:) Tj",  "(Adherence to motor vehicle law:) Tj",  "(Other Comments:) Tj", "(Other comments:) Tj", "(Minivan:) Tj", "((Recommendations Other:) Tj:) Tj" , "(Evaluated By:) Tj" , "(Evaluated On:) Tj"];
      var ValueIds= ["ClientName", "ClientAddress", "ClientDOB", "ClientTelephone", "ClientDiagnosis", "ClientReferredBy", "ReportDate", "SentDate", "BackgroundComments", "medicalCleareance", "presecriptionMedecine", "independentTransfer", "licenseStatus", "MobilityDevice", "LicenseExpiration", "LicenseNumber","LicenseRestrictions", "CurrentlyDriving", "CurrentVehicle", "CurrentAE", "LastEyeExam", "LeftUpperExtremity", "RightUpperExtremity", "LeftLowerExtremity", "RightLowerExtremity", "OtherExtremity", "DrivingHistory", "ClinicalInformation", "Backgroundcomments2","vehicleUsed", "AEUsed" , "weather", "Road", "Trafic", "Route", "Time", "PrimaryControlOperation", "Awareness", "Adherence", "OtherComments1",    "atd", "uoAE", "train", "roadTest",     "OtherComments2", "Minivan","ReconmendationsOther",   "EvaluatedBy", "EvalDate"]; // "
      var ValueIDsForRadioButtons =["medicalCleareance", "presecriptionMedecine", "independentTransfer", "licenseStatus", "CurrentlyDriving"];
      var ValueIDsForCheckBoxes = ["atd", "uoAE", "train", "roadTest"];
      var ListOfHeaderValsTOIgnore = ["(Background) Tj" , "(In-Vehicle Assesment) Tj", "(Vehicle and Adaptive Equipment Recommendations) Tj" , "(Primary Controls) Tj" ,   "(Secondary Controls) Tj"];
      //var ValueIds= [];
////
      for (let step = 0; step < ValueIds.length; step++) {
        console.log(ValueHeaders[step]);



        var TextValue = "";
        var pos = pdfFile.indexOf(ValueHeaders[step]);
        var pos1 = pdfFile.indexOf(ValueHeaders[step+1]);

        console.log(pos);
        console.log(pos1);
        //getting section with answer
        var res = pdfFile.slice(pos, pos1);

        for (let x = 0; x < ListOfHeaderValsTOIgnore.length; x++) {
          if (res.includes(ListOfHeaderValsTOIgnore[x])){
            var res = res.replace(ListOfHeaderValsTOIgnore[x], "");

          }
        }

          var MoreLines =1;
        do {


          var n = res.indexOf(") Tj");
          var pos2 = res.indexOf(") Tj", (n + 3));
          var n1 = res.indexOf("(");
          var pos3 = res.indexOf("(", (n1) + 2);


            if ((pos3 == -1) || (pos2 == -1)) {
              MoreLines = 0;
            } else {
              var res1 = res.slice((pos3 + 1), pos2);
              TextValue = TextValue + res1;
              console.log("res1 is " + res1);
              var res = res.replace("(" + res1 + ") Tj");
            }


        }while (MoreLines == 1);
        if ((ValueIds[step] == "PRIMARYDROPDOWN") || (ValueIds[step] == "SECONDARYDROPDOWN")) {

        }else{
          if (ValueIDsForRadioButtons.includes(ValueIds[step])){
            if ((res1.includes("es")) || (res1.includes("alid"))){
              document.getElementById(ValueIds[step]).checked = true;
            }else {
              var IDVal = ValueIds[step] + "2";
              console.log(IDVal);
              document.getElementById(IDVal).checked = true;
            }
          }else if (ValueIDsForCheckBoxes.includes(ValueIds[step])){
            if (res1.includes("es")){
              document.getElementById(ValueIds[step]).checked = true;
            }else{
              document.getElementById(ValueIds[step]).checked = false;
            }
          }else{
            document.getElementById(ValueIds[step]).value = TextValue;
          }        }

      }

      //value needed between pos and pos1
    };

    reader.readAsText(file);
  }





  function handleChange1(event) {
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




      var ValueHeaders = ["(First Name:) Tj", "(Address 1:) Tj", "(Date:) Tj", "(Number:) Tj" ];
      var ValueIds= ["ClientName", "ClientAddress" ,"ClientDOB", "ClientTelephone"];


      for (let step = 0; step < 4; step++) {
        console.log(ValueHeaders[step]);

        var pos = pdfFile.indexOf(ValueHeaders[step]);
        var pos1 = pdfFile.indexOf(ValueHeaders[step+1]);

        //console.log(pos);
        //console.log(pos1);
        //getting section with answer
        var res = pdfFile.slice(pos, pos1);
        //console.log(res);


        var n = res.indexOf(") Tj");
        var pos2 = res.indexOf(") Tj", (n+3));
        var n1 = res.indexOf("(");
        var pos3 = res.indexOf("(", (n1)+2);


        var res1 = res.slice((pos3+1), pos2);
        console.log(step);
        document.getElementById(ValueIds[step]).value = res1;
      }
      //value needed between pos and pos1
    };

    reader.readAsText(file);
  }
// SECONDARY values
  const [secondaryAllValues, setSecondaryAllValues] = useState({});
  const [nextSecondaryIdx, setNextSecondaryIndex] = useState(1)

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
    setNextSecondaryIndex(nextSecondaryIdx+1)
  }

  function RemoveSecondaryDropDown(i) {
    const newState = { ...secondaryAllValues };
    delete newState[i];
    setSecondaryAllValues(newState);
  }

  function ChangeSecondaryItem(i, event) {
    setSecondaryAllValues({
      ...secondaryAllValues,
      [i]: { ...secondaryAllValues[i], textboxVal: event }
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
  const generalStyles = {
    marginLeft: '20px',
    marginRight: '20px',
  };
// PRIMARY VALUES
  const [primaryAllValues, setPrimaryAllValues] = useState({});
  const [nextIdx, setNextIndex] = useState(1)
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
    setNextIndex(nextIdx+1)
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
      [i]: { ...primaryAllValues[i], textboxVal: event}
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
    var doc = new jsPDF();
    var bigtext = 55;


    var clientName = $('#ClientName').val();
    var clientNamelines =  doc.splitTextToSize(clientName, bigtext);
    var clientAddress = $('#ClientAddress').val();
    var clientAddresslines =  doc.splitTextToSize(clientAddress, bigtext);
    var clientDOB = $('#ClientDOB').val();
    var clientDOBlines =  doc.splitTextToSize(clientDOB, bigtext);
    var clientTelephone = $('#ClientTelephone').val();
    var clientTelephonelines =  doc.splitTextToSize(clientTelephone, bigtext);
    var clientDiagnosis = $('#ClientDiagnosis').val();
    var clientDiagnosislines =  doc.splitTextToSize(clientDiagnosis, bigtext);

    var clientReferredBy = $('#ClientReferredBy').val();
    var clientReferredBylines =  doc.splitTextToSize(clientReferredBy, bigtext);
    var sentDate = $('#SentDate').val();
    var sentDatelines =  doc.splitTextToSize(sentDate, bigtext);
    var clientDiagnosis = $('#ClientDiagnosis').val();
    var clientDiagnosislines =  doc.splitTextToSize(clientDiagnosis, bigtext);

    var licenseExpiration = $('#LicenseExpiration').val();
    var licenseExpirationlines =  doc.splitTextToSize(licenseExpiration, bigtext);

    var reportDate = $('#ReportDate').val();
    var reportDatelines =  doc.splitTextToSize(reportDate, bigtext);
    var backgroundComments = $('#BackgroundComments').val();
    var backgroundCommentslines =  doc.splitTextToSize(backgroundComments, bigtext);

    var mobilityDevice = $('#MobilityDevice').val();
    var mobilityDevicelines =  doc.splitTextToSize(mobilityDevice, bigtext);

    var licenseNumber = $('#LicenseNumber').val();
    var licenseNumberlines =  doc.splitTextToSize(licenseNumber, bigtext);


    var licenseRestrictions = $('#LicenseRestrictions').val();
    var licenseRestrictionslines =  doc.splitTextToSize(licenseRestrictions, bigtext);

    var currentVehicle = $('#CurrentVehicle').val();
    var currentVehiclelines =  doc.splitTextToSize(currentVehicle, bigtext);

    var currentAE = $('#CurrentAE').val();
    var currentAElines =  doc.splitTextToSize(currentAE, bigtext);

    var lastEyeExam = $('#LastEyeExam').val();
    var lastEyeExamlines =  doc.splitTextToSize(lastEyeExam, bigtext);

    var leftUpperExtremity = $('#LeftUpperExtremity').val();
    var leftUpperExtremitylines =  doc.splitTextToSize(leftUpperExtremity, bigtext);

    var rightUpperExtremity = $('#RightUpperExtremity').val();
    var rightUpperExtremitylines =  doc.splitTextToSize(rightUpperExtremity, bigtext);

    var leftLowerExtremity = $('#LeftLowerExtremity').val();
    var leftLowerExtremitylines =  doc.splitTextToSize(leftLowerExtremity, bigtext);

    var rightLowerExtremity = $('#RightLowerExtremity').val();
    var rightLowerExtremitylines =  doc.splitTextToSize(rightLowerExtremity, bigtext);

    var otherExtremity = $('#OtherExtremity').val();
    var otherExtremitylines =  doc.splitTextToSize(otherExtremity, bigtext);


    var drivingHistory = $('#DrivingHistory').val();
    var drivingHistorylines =  doc.splitTextToSize(drivingHistory, bigtext);

    var clinicalInformation = $('#ClinicalInformation').val();
    var clinicalInformationlines =  doc.splitTextToSize(clinicalInformation, bigtext);


    var backgroundcomments2 = $('#Backgroundcomments2').val();
    var backgroundcomments2lines =  doc.splitTextToSize(backgroundcomments2, bigtext);

    var meciala = $('#medicalClearence').val();

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
    var pageHeight = (doc.internal.pageSize.height)-10;
    var cursorY = 60;

    doc.setFontSize(17);
    doc.text(35, 30, "CENTRAL MASSACHUSETTS SAFETY COUNCIL");
    doc.setFontSize(14);
    doc.text(50, 37, "Driver Evaluation and Training Program");


    doc.setFontSize(13);
    doc.text(80, 50, "Evaluation");


    doc.setFontSize(12);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Name:");
    }
    else{
      doc.text(45, cursorY + 10, "Name:");
    }
    clientNamelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY +10, lineText);
      }
      cursorY += lineSpacing;
    })



    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Address:");
    }
    else{
      doc.text(45, cursorY + 10, "Address:");
    }
    clientAddresslines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })




    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Date of Birth:");
    }
    else{
      doc.text(45, cursorY + 10, "Date of Birth:");
    }    clientDOBlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })





    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Telephone:");
    }
    else{
      doc.text(45, cursorY + 10, "Telephone:");
    }
    clientTelephonelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Diagnosis:");
    }
    else{
      doc.text(45, cursorY + 10, "Diagnosis:");
    }
    clientDiagnosislines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+ 10, lineText);
      }
      cursorY += lineSpacing;
    })



    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Referred by:");
    }
    else{
      doc.text(45, cursorY + 10, "Referred by:");
    }    clientReferredBylines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+ 10, lineText);
      }
      cursorY += lineSpacing;
    })



    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Evaluation Date:");
    }
    else{
      doc.text(45, cursorY + 10, "Evaluation Date:");
    }
    evalDatelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+ 10, lineText);
      }
      cursorY += lineSpacing;
    })


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Report Date:");
    }
    else{
      doc.text(45, cursorY + 10, "Report Date:");
    }
    reportDatelines.forEach(lineText => {
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
      doc.text(45, cursorY, "Sent Date:");
    }
    else{
      doc.text(45, cursorY + 10, "Sent Date:");
    }
    sentDatelines.forEach(lineText => {
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
      doc.text(45, cursorY, "Comment:");
    }
    else{
      doc.text(45, cursorY + 10, "Comment:");
    }
    backgroundCommentslines.forEach(lineText => {
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

    doc.setFontSize(13);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(30, cursorY, "Background");
    }
    else{
      doc.text(30, cursorY + 10, "Background");
    }
    cursorY += lineSpacing;
    cursorY += lineSpacing;

    doc.setFontSize(12);


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Medical Clearence to drive?");
    }
    else{
      doc.text(45, cursorY + 10, "Medical Clearence to drive?");
    }
    var Value = "No";

    if($('input[id=medicalCleareance]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;












    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "uses prescription Medecine?");
    }
    else{
      doc.text(45, cursorY + 10, "uses prescription Medecine?" );
    }
    var Value = "No";

    if($('input[id=presecriptionMedecine]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;











    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Independent Transfer?");
    }
    else{
      doc.text(45, cursorY + 10, "Independent Transfer?" );
    }
    var Value = "No";

    if($('input[id=IndependentTransfer]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;










    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "License Status: ");
    }
    else{
      doc.text(45, cursorY + 10, "License Status: " );
    }
    var Value = "No";

    if($('input[id=LicenseStatus]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;



    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Mobility Device:");
    }
    else{
      doc.text(45, cursorY + 10, "Mobility Device:");
    }
    mobilityDevicelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "License Expiration:");
    }
    else{
      doc.text(45, cursorY + 10, "License Expiration:");
    }
    licenseExpirationlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY +10, lineText);
      }
      cursorY += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "License Number:");
    }
    else{
      doc.text(45, cursorY + 10, "License Number:");
    }
    licenseNumberlines.forEach(lineText => {
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
      doc.text(45, cursorY, "License Restrictions:");
    }
    else{
      doc.text(45, cursorY + 10, "License Restrictions:");
    }
    licenseRestrictionslines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Currently Driving?");
    }
    else{
      doc.text(45, cursorY + 10, "Currently Driving" );
    }
    var Value = "No";

    if($('input[id=CurrentlyDriving]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;







    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Current Vehicle:");
    }
    else{
      doc.text(45, cursorY + 10, "Current Vehicle:");
    }
    currentVehiclelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Current adaptive equipment(AE):");
    }
    else{
      doc.text(45, cursorY + 10, "Current adaptive equipment(AE):");
    }
    currentVehiclelines.forEach(lineText => {
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
      doc.text(45, cursorY, "Last eye exam:");
    }
    else{
      doc.text(45, cursorY + 10, "Last eye exam:");
    }
    lastEyeExamlines.forEach(lineText => {
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

    console.log(cursorY);
    console.log(pageHeight);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Left upper extremity:");
    }
    else{
      doc.text(45, cursorY + 10, "Left upper extremity:");
    }
    leftUpperExtremitylines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Right upper extremity:");
    }
    else{
      doc.text(45, cursorY + 10, "Right upper extremity:");
    }
    rightUpperExtremitylines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10, lineText);
      }
      cursorY += lineSpacing;
    })


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Left Lower extremity:");
    }
    else{
      doc.text(45, cursorY + 10, "Left Lower extremity:");
    }
    leftLowerExtremitylines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{
        doc.text(105, cursorY+10 , lineText);
      }
      cursorY += lineSpacing;
    })



    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Right Lower extremity:");
    }
    else{
      doc.text(45, cursorY + 10, "Right Lower extremity:");
    }
    rightLowerExtremitylines.forEach(lineText => {
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
      doc.text(45, cursorY, "Other:");
    }
    else{
      doc.text(45, cursorY + 10, "Other:");
    }
    otherExtremitylines.forEach(lineText => {
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
      doc.text(45, cursorY, "Driving History:");
    }
    else{
      doc.text(45, cursorY + 10, "Driving History:");
    }
    drivingHistorylines.forEach(lineText => {
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
      doc.text(45, cursorY, "Clinical Information:");
    }
    else{
      doc.text(45, cursorY + 10, "Clinical Information:");
    }
    clinicalInformationlines.forEach(lineText => {
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
      doc.text(45, cursorY, "Comments:");
    }
    else{
      doc.text(45, cursorY + 10, "Comments:");
    }
    backgroundcomments2lines.forEach(lineText => {
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









    doc.setFontSize(13);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(30, cursorY, "In-Vehicle Assesment");
    }
    else{
      doc.text(30, cursorY + 10, "In-Vehicle Assesment");
    }
    cursorY += lineSpacing;
    cursorY += lineSpacing;

    doc.setFontSize(12);

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Vehicle used:");
    }
    else{
      doc.text(45, cursorY + 10, "Vehicle used:");
    }
    vehicleUsedlines.forEach(lineText => {
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
      doc.text(45, cursorY + 10, "Weather Conditions:");
    }
    weatherlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else {doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Road Conditions:");
    }
    else{
      doc.text(45, cursorY + 10, "Road Conditions:");
    }
    roadlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else {doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Traffic Conditions:");
    }
    else{
      doc.text(45, cursorY + 10, "Traffic Conditions:");
    }
    trafficlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Route:");
    }
    else{
      doc.text(45, cursorY + 10, "Route:");
    }
    routelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Time:");
    }
    else{
      doc.text(45, cursorY + 10, "Time:");
    }
    timelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Primary Control Operation:")
    }
    else{
      doc.text(45, cursorY + 10, "Primary Control Operation:");
    }
    primaryControlOperationlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Awareness of/interaction with traffic environment:");
    }
    else{
      doc.text(45, cursorY + 10, "Awareness of/interaction with traffic environment:");
    }
    cursorY += lineSpacing;

    awarnesslines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })
    if (cursorY > 200) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Adherence to motor vehicle law:");
    }
    else{
      doc.text(45, cursorY + 10, "Adherence to motor vehicle law:");
    }
    adherencelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
      }
      else{doc.text(105, cursorY + 10, lineText);}
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
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })



    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Approved To Drive:");
    }
    else{
      doc.text(45, cursorY + 10, "Approved To Drive:");
    }
    var Value = "No";

    if($('input[id=atd]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing




    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Use of AE:");
    }
    else{
      doc.text(45, cursorY + 10, "Use of AE:");
    }
    var Value = "No";

    if($('input[id=uoAE]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;




    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Training:");
    }
    else{
      doc.text(45, cursorY + 10, "Training:");
    }
    var Value = "No";

    if($('input[id=train]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;




    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Road Test:");
    }
    else{
      doc.text(45, cursorY + 10, "Road Test:");
    }
    var Value = "No";

    if($('input[id=roadTest]:checked').length > 0){
      Value=  "Yes";
    }
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(105, cursorY, Value);
    }
    else{
      doc.text(105, cursorY+10, Value);
    }
    cursorY += lineSpacing;


    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Other Comments:");
    }
    else{
      doc.text(45, cursorY + 10, "Other Comments:");
    }
    otherComments2lines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })






    doc.setFontSize(13);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(30, cursorY, "Vehicle and Adaptive Equipment Recommendations");
    }
    else{
      doc.text(30, cursorY + 10, "Vehicle and Adaptive Equipment Recommendations");
    }
    cursorY += lineSpacing;
    cursorY += lineSpacing;

    doc.setFontSize(12);

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Minivan:");
    }
    else{
      doc.text(45, cursorY + 10, "Minivan:");
    }
    minivanlines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Recommendations Other:");
    }
    else{
      doc.text(45, cursorY + 10, "Recommendations Other:");
    }
    recommendationslines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Evaluated By:");
    }
    else{
      doc.text(45, cursorY + 10, "Evaluated By:");
    }
    evaluatedBylines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 10, lineText);}
      cursorY += lineSpacing;
    })

    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Evaluated On:");
    }
    else{
      doc.text(45, cursorY + 10, "Evaluated On:");
    }
    evalDatelines.forEach(lineText => {
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(105, cursorY, lineText);
      }
      else{doc.text(105, cursorY + 130, lineText);}
      cursorY += lineSpacing;
    })
    // get values from dropdown

    var curArr= Object.keys(primaryAllValues);

    doc.setFontSize(14);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Primary Controls");
    }else{
      doc.text(45, cursorY + 10, "Primary Controls");
      cursorY += lineSpacing;
    }
    doc.setFontSize(12);
    for(var i=0;i<curArr.length;i++){


      var dropdown = (primaryAllValues[curArr[i]].dropdownVal.label)

      var TextPartP =  (primaryAllValues[curArr[i]].textboxVal)
      var otextboxlines =  doc.splitTextToSize(TextPartP, bigtext);
      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        doc.text(45, cursorY, "Modificiation Part: " + dropdown);
      }else{
        doc.text(45, cursorY + 10, "Modificiation Part: " + dropdown);
      }

      otextboxlines.forEach(lineText => {
        if (cursorY > pageHeight) { // Auto-paging
          doc.addPage();
          cursorY = pageWrapInitialYPosition;
          doc.text(125, cursorY, lineText);
        }
        else{doc.text(125, cursorY + 10, lineText);}
        cursorY += lineSpacing;
      })
    };
    var curSecondaryArr= Object.keys(secondaryAllValues);
    doc.setFontSize(14);
    if (cursorY > pageHeight) { // Auto-paging
      doc.addPage();
      cursorY = pageWrapInitialYPosition;
      doc.text(45, cursorY, "Secondary Controls");
    }else{
      doc.text(45, cursorY + 10, "Secondary Controls");
      cursorY += lineSpacing;
    }
    doc.setFontSize(12);
    for(var i=0;i<curSecondaryArr.length;i++){
      // HOW YOU GET VALUE FROM DROPDOWN
      var dropdown = (secondaryAllValues[curSecondaryArr[i]].dropdownVal.label)
      // HOW YOU GET VALUE FROM TEXTBOX
      var TextPart = (secondaryAllValues[curSecondaryArr[i]].textboxVal);
      var otextboxlines =  doc.splitTextToSize(TextPart, bigtext);

      if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        doc.text(45, cursorY, dropdown);
      }else{
        doc.text(45, cursorY + 10, dropdown);
      }
      otextboxlines.forEach(lineText => {
        if (cursorY > pageHeight) { // Auto-paging
          doc.addPage();
          cursorY = pageWrapInitialYPosition;
          doc.text(125, cursorY, lineText);
        }
        else{doc.text(125, cursorY + 10, lineText);}
        cursorY += lineSpacing;
      })    };

    doc.save("DriverRehab.pdf");
  }


  return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <h3>Evaluation Form</h3>

        <div class="form-group">
          <label for="ClientName">Client Name</label>
          <input name="ClientName" id="ClientName" class="form-control"  rows="3" ref={register}/>
        </div>

        <div class="form-group">
          <label for="ClientAddress">Client Address</label>
          <input name="ClientAddress" id="ClientAddress" class="form-control"  rows="3" ref={register}/>
        </div>


        <div class="form-group">
          <label for="ClientDOB">Client Date Of Birth</label>
          <input name="ClientDOB" id="ClientDOB" class="form-control"  rows="3" ref={register}/>
        </div>

        <div class="form-group">
          <label for="ClientTelephone">Client Telephone</label>
          <input name="ClientTelephone" id="ClientTelephone" class="form-control"  rows="3" ref={register}/>
        </div>


        <div class="form-group">
          <label for="ClientDiagnosis">Client Diagnosis</label>
          <input name="ClientDiagnosis" id="ClientDiagnosis" class="form-control"  rows="3" ref={register}/>
        </div>



        <div class="form-group">
          <label for="ClientReferredBy">Client Referred By</label>
          <input name="ClientReferredBy" id="ClientReferredBy" class="form-control"  rows="3" ref={register}/>
        </div>


        <div class="form-group">
          <label for="SentDate">Sent Date</label>
          <input name="SentDate" id="SentDate" class="form-control"  rows="3" ref={register}/>
        </div>



        <div class="form-group">
          <label for="ReportDate">Report Date</label>
          <input name="ReportDate" id="ReportDate" class="form-control"  rows="3" ref={register}/>
        </div>

        <div class="form-group">
          <label for="BackgroundComments">comments</label>
          <input name="BackgroundComments"  class="form-control" id="BackgroundComments" rows="3" ref={register}/>
        </div>

        <h1>Background</h1>


        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Client has medical cleareance to drive?</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input"
                       name="medicalClearence"
                       type="radio"
                       id="medicalCleareance"
                       value="yes"
                       ref={register} />

                <label class="form-check-label" for="gridRadios1">
                  Yes
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" name="medicalClearence" type="radio" id="medicalCleareance2" value="no"/>
                <label class="form-check-label" for="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>







        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Client uses prescription medecine?</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input"
                       name="presecriptionMedecine"
                       type="radio"
                       value="yes"
                       id="presecriptionMedecine"
                       ref={register} />

                <label class="form-check-label" for="gridRadios1">
                  Yes
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" name="presecriptionMedecine" type="radio" id="presecriptionMedecine2" value="no"/>
                <label class="form-check-label" for="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div class="form-group">
          <label for="MobilityDevice">Mobility Device</label>
          <input name="MobilityDevice" class="form-control" id="MobilityDevice" rows="3" ref={register}></input>
        </div>



        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Independent Transfer?</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input"
                       name="IndependentTransfer"
                       type="radio"
                       value="yes"
                       id="independentTransfer"
                       ref={register} />

                <label class="form-check-label" for="gridRadios1">
                  Yes
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" name="independentTransfer2" type="radio" id="independentTransfer2" value="no"/>
                <label class="form-check-label" for="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>






        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">License Status</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input"
                       name="LicenseStatus"
                       type="radio"
                       value="Valid"
                       id="licenseStatus"
                       ref={register} />

                <label class="form-check-label" for="gridRadios1">
                  Valid
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" name="LicenseStatus" type="radio" id="licenseStatus2" value="not Valid"/>
                <label class="form-check-label" for="gridRadios2">
                  Not Valid
                </label>
              </div>
            </div>
          </div>
        </fieldset>



        <div class="form-group">
          <label for="LicenseExpiration">LIcense expiration</label>
          <input name="LicenseExpiration" class="form-control" id="LicenseExpiration" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="LicenseNumber">License Number</label>
          <input name="LicenseNumber" class="form-control" id="LicenseNumber" rows="3" ref={register}></input>
        </div>



        <div class="form-group">
          <label for="LicenseRestrictions">License restrictions</label>
          <input name="LicenseRestrictions" class="form-control" id="LicenseRestrictions" rows="3" ref={register}></input>
        </div>


        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Currently Driving</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input"
                       name="CurrentlyDriving"
                       type="radio"
                       value="yes"
                       id="CurrentlyDriving"
                       ref={register} />

                <label class="form-check-label" for="gridRadios1">
                  Yes
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" name="presecriptionMedecine" type="radio" id="CurrentlyDriving2" value="no"/>
                <label class="form-check-label" for="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div class="form-group">
          <label for="CurrentVehicle">Current Vehicle</label>
          <input name="CurrentVehicle" class="form-control" id="CurrentVehicle" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="CurrentAE">Current adaptive equipment(AE)</label>
          <input name="CurrentAE" class="form-control" id="CurrentAE" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="LastEyeExam">Last eye exam</label>
          <input name="LastEyeExam" class="form-control" id="LastEyeExam" rows="3" ref={register}></input>
        </div>
        <h2>Observed Physical Abilities-:</h2>

        <div class="form-group">
          <label for="LeftUpperExtremity">Left upper extremity</label>
          <input name="LeftUpperExtremity" class="form-control" id="LeftUpperExtremity" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="RightUpperExtremity">Right upper extremity</label>
          <input name="RightUpperExtremity" class="form-control" id="RightUpperExtremity" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="LeftLowerExtremity">Left lower extremity</label>
          <input name="LeftLowerExtremity" class="form-control" id="LeftLowerExtremity" rows="3" ref={register}></input>
        </div>

        <div class="form-group">
          <label for="RightLowerExtremity">Rigth lower extremity</label>
          <input name="RightLowerExtremity" class="form-control" id="RightLowerExtremity" rows="3" ref={register}></input>
        </div>

        <div class="form-group">
          <label for="OtherExtremity">Other</label>
          <input name="OtherExtremity" class="form-control" id="OtherExtremity" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="DrivingHistory">Driving History</label>
          <input name="DrivingHistory" class="form-control" id="DrivingHistory" rows="3" ref={register}></input>
        </div>

        <div class="form-group">
          <label for="ClinicalInformation">Clinical Information</label>
          <input name="ClinicalInformation" class="form-control" id="ClinicalInformation" rows="3" ref={register}></input>
        </div>


        <div class="form-group">
          <label for="Backgroundcomments2">Comments</label>
          <input name="Backgroundcomments2"  class="form-control" id="Backgroundcomments2" rows="3" ref={register}/>
        </div>

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
          <input name="approvedToDrive" type="checkbox" id="atd" ref={register} />
        </div>

        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Use of AE</legend>
          <input name="useOfAE" type="checkbox" id="uoAE" ref={register} />
        </div>

        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Training</legend>
          <input name="training" type="checkbox" id="train" ref={register} />
        </div>

        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Road Test</legend>
          <input name="roadTest" type="checkbox" id="roadTest" ref={register} />
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


        <h5 htmlFor="primaryControls ">Primary Controls: </h5>
        {Object.keys(primaryAllValues).map((field) => {
          return (
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div key={`${field}-${field}`}></div>
                    <Select options={items}
                            class="PrimaryClass"
                            name="primaryControls"
                            ref={register}
                            onChange={e => {
                              console.log(e);
                              HandleSelect(field, e)
                            }}
                            value={primaryAllValues[field].dropdownVal}
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                        className="form-control"
                        type="text"
                        style={{width: "370px"}}
                        value={primaryAllValues[field].textboxVal}
                        onChange={e => {
                          console.log(e)
                          ChangeItem(field, e.target.value)
                        }}
                    />
                  </div>
                  <div className="col-sm-2">
                    <button type="button" onClick={() => RemovePrimaryDropDown(field)}>
                      X
                    </button>
                  </div>
                  <div className="col-sm-1">
                  </div>
                </div>
              </div>
          );
        })}

        <button type="button" onClick={() => NewPrimaryDropDown(nextIdx)}>
          +
        </button>

        <h5 htmlFor="secondaryControls">Secondary controls, in motion, menu type system, access through left elbow or
          head switch,
          determined during initial training session </h5>
        {Object.keys(secondaryAllValues).map((field) => {

          return (
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div key={`${field}-${field}`}></div>
                    <Select
                        onChange={e => {
                          console.log(e);
                          HandleSecondarySelect(field, e)
                        }}

                        options={secondaryItems} ref={register}
                        value={secondaryAllValues[field].dropdownVal}/>
                  </div>
                  <div className="col-sm-4">
                    <input
                        className="form-control"
                        type="text"
                        style={{width: "370px"}}
                        value={secondaryAllValues[field].textboxVal}
                        onChange={e => {
                          console.log("Secondary")
                          console.log(e)
                          ChangeSecondaryItem(field, e.target.value)
                        }}
                    />
                  </div>
                  <div className="col-sm-2">
                    <button type="button" onClick={() => RemoveSecondaryDropDown(field)}>
                      X
                    </button>

                  </div>
                  <div className="col-sm-1">

                  </div>
                </div>
              </div>
          );
        })}
        <button type="button" onClick={() => NewSecondaryDropDown(nextSecondaryIdx)}>
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

        <input class="btn btn-primary" type="submit" /> &nbsp;&nbsp;
        <button class="btn btn-primary" onClick={e => generatePDF()}> Generate PDF </button>
        <input  type="file" name="firstName" onChange={handleChange} />
        <input  type="file" name="firstNamed" onChange={handleChange1} />


      </form>

  );
}
