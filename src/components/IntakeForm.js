import React from "react"

import { useForm } from "react-hook-form";

import "./index.css";
import Client from "./client";

import DatePicker from "react-datepicker";
import $ from "jquery";
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from "jspdf";

function IntakeForm(props){
    const { register, watch,setValue, handleSubmit, errors } = useForm(
        {
            defaultValues: {
                firstName: props.dataFromParent,
                lastName:  props.dataFromParent,
                email: "bluebill1049@hotmail.com",
                pets: [ 'dog', 'cat' ]
            }
        }
    );
    const onSubmit = data => {
        var doc = new jsPDF();
        var bigtext = 55;
        var First = $('#firstName').val();
        var firstNameLines = doc.splitTextToSize(First, bigtext);
        var Last = $('#lastName').val();
        var lastNamelines = doc.splitTextToSize(Last, bigtext);
        var First2 = $('#fName').val();
        var firstNameLines2 = doc.splitTextToSize(First2, bigtext);
        var Last2 = $('#lName').val();
        var lastNamelines2 = doc.splitTextToSize(Last2, bigtext);
        var Email = $('#inputEmail5').val();
        var Emaillines = doc.splitTextToSize(Email, bigtext);
        var Date = $('#DatePicker').val();
        var Datellines = doc.splitTextToSize(Date, bigtext);
        var Number = $('#mobileNumber').val();
        var Numberlines = doc.splitTextToSize(Number, bigtext);
        var Number2 = $('#mobileNumber2').val();
        var Number2lines = doc.splitTextToSize(Number2, bigtext);
        var Address =$('#inputAddress').val();
        var Addresslines = doc.splitTextToSize(Address, bigtext);
        var Address2 = $('#inputAddress2').val();
        var Address2lines = doc.splitTextToSize(Address2, bigtext);
        //var Address3 = $('#inputAddress3').val();
        //var Address3lines = doc.splitTextToSize(Address3, bigtext);
        var city = $('#inputCity').val();
        var citylines = doc.splitTextToSize(city, bigtext);
        var state = $('#inputState').val();
        var statelines = doc.splitTextToSize(state, bigtext);
        var Zip= $('#inputZip').val();
        var Ziplines = doc.splitTextToSize(Zip, bigtext);
        var address1 = $('#inputAddress4').val();
        var address1lines = doc.splitTextToSize(address1, bigtext);
        var city1 = $('#inputCity4').val();
        var city1lines = doc.splitTextToSize(city1, bigtext);
        var state1 = $('#inputState4').val();
        var state1lines = doc.splitTextToSize(state1, bigtext);
        var Zip1= $('#inputZip4').val();
        var Zip1lines = doc.splitTextToSize(Zip1, bigtext);
        var Medical = $('#medicalClearanceTextArea').val();
        var Medicallines = doc.splitTextToSize(Medical, bigtext);
        var Driving = $('#drivingConcernsTextArea').val();
        var Drivinglines = doc.splitTextToSize(Driving, bigtext);
        var Diagnosis = $('#diagnosis').val();
        var Diagnosislines = doc.splitTextToSize(Diagnosis, bigtext);
        var Onset = $('#onset').val();
        var Onsetlines = doc.splitTextToSize(Onset, bigtext);
        var VehicleMake = $('#vehicleMake').val();
        var VehicleMakelines = doc.splitTextToSize(VehicleMake, bigtext);
        var Seizure = $('#seizure').val();
        var Seizurelines = doc.splitTextToSize(Seizure, bigtext);
        var Mileage = $('#Mileage').val();
        var MileageLines = doc.splitTextToSize(Mileage, bigtext);
        var PermitNumber = $('#permitHelpBlock').val();
        var PermitNumberLines = doc.splitTextToSize(PermitNumber, bigtext);
        var WheelChair = $('#wheel').val();
        var WheelChairLines = doc.splitTextToSize(WheelChair, bigtext)
        var Seatedheight = $('#height').val();
        var SeatedheightLines = doc.splitTextToSize(Seatedheight, bigtext);

        var fundingSource = $('#FundingSource').val();
        var fundingSourceLines = doc.splitTextToSize(fundingSource, bigtext);

        var contactPerson = $('#ContactPerson').val();
        var contactPersonLines = doc.splitTextToSize(contactPerson, bigtext);

        var fundingEmail = $('#FundingEmail').val();
        var fundingEmailLines = doc.splitTextToSize(fundingEmail, bigtext);

        var fundingMobileNumber = $('#FundingMobileNumber').val();
        var fundingMobileNumberLines = doc.splitTextToSize(fundingMobileNumber, bigtext);

        var fundingAddress = $('#FundingAddress').val();
        var fundingAddressLines = doc.splitTextToSize(fundingAddress, bigtext);

        var lineSpacing = 10;
        var cursorY = 55;
        var pageWrapInitialYPosition = 20;
        var pageHeight = (doc.internal.pageSize.height) - 10;
        var cursorY = 20;
        var cursorY = 20;
        var cursorY = 20;


        //var adherence= $('#Adherence').val();
        //var otherComments= $('#OtherComments1').val();
        //var otherComments2= $('#OtherComments2').val();
        //var minivan= $('#Minivan').val();
        //var reconmendationsOther= $('#ReconmendationsOther').val();
        //var evalDate= $('#EvalDate').val();
        //var evaluatedBy= $('#EvaluatedBy').val();

        doc.setFontSize(14);
        doc.text(60, 30, "CENTRAL MASSACHUSETTS SAFETY COUNCIL");
        doc.setFontSize(14);
        doc.text(70, 37, "Driver Evaluation and Training Program");


        doc.setFontSize(15);
        doc.text(60, 50, "DRIVER EVALUATION INTAKE FORM");


        cursorY= 70;
        doc.setFontSize(12);
        doc.text(30, 60, "Client:");
        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "First Name:");
        }
        else{
            doc.text(45, cursorY + 10, "First Name:");
        }
        firstNameLines.forEach(lineText => {
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
            doc.text(45, cursorY, "Last Name:");
        }
        else{
            doc.text(45, cursorY + 10, "Last Name:");
        }
        lastNamelines.forEach(lineText => {
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
            doc.text(45, cursorY, "Date:");
        }
        else{
            doc.text(45, cursorY + 10, "Date:");
        }
        Datellines.forEach(lineText => {
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
            doc.text(45, cursorY, "Number:");
        }
        else{
            doc.text(45, cursorY + 10, "Number:");
        }
        Numberlines.forEach(lineText => {
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
            doc.text(45, cursorY, "Address 1:");
        }
        else{
            doc.text(45, cursorY + 10, "Address 1:");
        }
        Addresslines.forEach(lineText => {
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
            doc.text(45, cursorY, "Address 2:");
        }
        else{
            doc.text(45, cursorY + 10, "Address 2:");
        }
        Address2lines.forEach(lineText => {
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
            doc.text(45, cursorY, "City:");
        }
        else{
            doc.text(45, cursorY + 10, "City:");
        }
        citylines.forEach(lineText => {
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
            doc.text(45, cursorY, "State:");
        }
        else{
            doc.text(45, cursorY + 10, "State:");
        }
        statelines.forEach(lineText => {
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
            doc.text(45, cursorY, "Zip:");
        }
        else{
            doc.text(45, cursorY + 10, "Zip:");
        }
        Ziplines.forEach(lineText => {
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
            doc.text(45, cursorY, "Referral:");
        }
        else{
            doc.text(30, cursorY + 10, "Referral:");
        }
        cursorY += lineSpacing;



        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "First Name:");
        }
        else{
            doc.text(45, cursorY + 10, "First Name:");
        }
        firstNameLines2.forEach(lineText => {
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
            doc.text(45, cursorY, "Last Name:");
        }
        else{
            doc.text(45, cursorY + 10, "Last Name:");
        }
        lastNamelines2.forEach(lineText => {
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
            doc.text(45, cursorY, "Email:");
        }
        else{
            doc.text(45, cursorY + 10, "Email:");
        }
        Emaillines.forEach(lineText => {
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
            doc.text(45, cursorY, "Number:");
        }
        else{
            doc.text(45, cursorY + 10, "Number:");
        }
        Number2lines.forEach(lineText => {
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
            doc.text(45, cursorY, "Address:");
        }
        else{
            doc.text(45, cursorY + 10, "Address:");
        }
        address1lines.forEach(lineText => {
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
            doc.text(45, cursorY, "City:");
        }
        else{
            doc.text(45, cursorY + 10, "City:");
        }
        city1lines.forEach(lineText => {
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
            doc.text(45, cursorY, "State:");
        }
        else{
            doc.text(45, cursorY + 10, "State:");
        }
        state1lines.forEach(lineText => {
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
            doc.text(45, cursorY, "Zip:");
        }
        else{
            doc.text(45, cursorY + 10, "Zip:");
        }
        Zip1lines.forEach(lineText => {
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
            doc.text(45, cursorY, "Medical Information:");
        }
        else{
            doc.text(30, cursorY + 10, "Medical Information:");
        }
        cursorY += lineSpacing;


        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Medically cleared to drive:");
        }
        else{
            doc.text(45, cursorY + 10, "Medically cleared to drive:");
        }

        Medicallines.forEach(lineText => {
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
            doc.text(45, cursorY, "Driving Concerns:");
        }
        else{
            doc.text(45, cursorY + 10, "Driving Concerns:");
        }
        Drivinglines.forEach(lineText => {
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
            doc.text(45, cursorY, "Diagonis:");
        }
        else{
            doc.text(45, cursorY + 10, "Diagonis:");
        }
        Diagnosislines.forEach(lineText => {
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
            doc.text(45, cursorY, "Onset:");
        }
        else{
            doc.text(45, cursorY + 10, "Onset:");
        }
        Onsetlines.forEach(lineText => {
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
            doc.text(45, cursorY, "Date Of Last Seizure:");
        }
        else{
            doc.text(45, cursorY + 10, "Date Of Last Seizure:");
        }
        Onsetlines.forEach(lineText => {
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
            doc.text(45, cursorY, "Medication Use:");
            if($('input[id=gridRadios1]:checked').length > 0){
                doc.text(105, cursorY, "Yes" )
            }
            else{
                doc.text(105, cursorY, "No")
            }
        }
        else{
            doc.text(45, cursorY + 10, "Medication use:" );
            if($('input[id=gridRadios1]:checked').length > 0){
                doc.text(105, cursorY+10, "Yes" )
            }
            else{
                doc.text(105, cursorY+10, "No")
            }
        }

        cursorY += lineSpacing;



        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Driving History:");
        }
        else{
            doc.text(30, cursorY + 10, "Driving History:");
        }
        cursorY += lineSpacing;



        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Do you have a driver's license?");
        }
        else{
            doc.text(45, cursorY + 10, "Do you have a driver's license?");
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

        if (Value == "Yes"){

        }



        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Is your privilege to drive under suspension or revocation?");
        }
        else{
            doc.text(45, cursorY + 10, "Is your privilege to drive under suspension or revocation?");
        }
        var Value = "No";

        if($('input[id=priv1]:checked').length > 0){
            Value=  "Yes";
        }
        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(160, cursorY, Value);
        }
        else{
            doc.text(160, cursorY+10, Value);
        }
        cursorY += lineSpacing;



        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Vehicle year, make / model:");
        }
        else{
            doc.text(45, cursorY + 10, "Vehicle year, make / model:");
        }
        VehicleMakelines.forEach(lineText => {
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
            doc.text(45, cursorY, "Mileage:");
        }
        else{
            doc.text(45, cursorY + 10, "Mileage:");
        }
        MileageLines.forEach(lineText => {
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
            doc.text(45, cursorY, "Driving Permit Number:");
        }
        else{
            doc.text(45, cursorY + 10, "Driving Permit Number:");
        }
        PermitNumberLines.forEach(lineText => {
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

doc.addPage();
  cursorY = pageWrapInitialYPosition;


        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Physical Abilities:");
        }
        else{
            doc.text(30, cursorY + 10, "Physical Abilities:");
        }
        cursorY += lineSpacing;

         if($('input[id=lhf]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                 doc.addPage();
                 cursorY = pageWrapInitialYPosition;
                 doc.text(45, cursorY, "Limited Hand Function");
             }
             else{
                 doc.text(30, cursorY + 10, "Limited Hand Function");
             }
             cursorY += lineSpacing;

        }
        if($('input[id=dma]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty moving arms");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty moving arms");
            }
            cursorY += lineSpacing;

        }
        if($('input[id=dml]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty moving legs");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty moving legs");
            }
            cursorY += lineSpacing;

        }
        if($('input[id=dmhu]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty moving head up");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty moving head up");
            }
            cursorY += lineSpacing;
        }
        if($('input[id=dmhd]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty moving head down");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty moving head down");
            }
             cursorY += lineSpacing;

        }
        if($('input[id=dmhl]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty moving head left");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty moving head left");
            }
            cursorY += lineSpacing;

        }
        if($('input[id=dmhr]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty moving head right");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty moving head right");
            }
            cursorY += lineSpacing;

        }
        if($('input[id=neur]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Neuropathy");
            }
            else{
                doc.text(30, cursorY + 10, "Neuropathy");
            }
            cursorY += lineSpacing;

        }
        if($('input[id=vd]:checked').length > 0){
             if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Visual Difficulties");
            }
            else{
                doc.text(30, cursorY + 10, "Visual Difficulties");
            }
            cursorY += lineSpacing;
        }
        cursorY += lineSpacing;

        doc.addPage();
        cursorY = pageWrapInitialYPosition;

        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Did you use any of the following ?");
        }
        else{
            doc.text(30, cursorY + 10, "Did you use any of the following ?");
        }
        cursorY += lineSpacing;

        if($('input[id=walker]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Walker");
            }
            else{
                doc.text(30, cursorY + 10, "Walker");
            }
            cursorY += lineSpacing;
        }

        if($('input[id=crutches]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Crutches");
            }
            else{
                doc.text(30, cursorY + 10, "Crutches");
            }
            cursorY += lineSpacing;
        }


        if($('input[id=cane]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Cane");
            }
            else{
                doc.text(30, cursorY + 10, "Cane");
            }
            cursorY += lineSpacing;
        }

        if($('input[id=manualwc]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Manual Wheelchair:");
            }
            else{
                doc.text(30, cursorY + 10, "Manual Wheelchair:");
            }
            cursorY += lineSpacing;
        }

        if($('input[id=powerwc]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Power Wheelchair:");
            }
            else{
                doc.text(30, cursorY + 10, "Power Wheelchair:");
            }
            cursorY += lineSpacing;
        }



        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "WheelChair Make/Model:");
        }
        else{
            doc.text(45, cursorY + 10, "WheelChair Make/Model:");
        }
        WheelChairLines.forEach(lineText => {
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
            doc.text(45, cursorY, "Seated Height in Wheelchair:");
        }
        else{
            doc.text(45, cursorY + 10, "Seated Height in Wheelchair:");
        }
        SeatedheightLines.forEach(lineText => {
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
            doc.text(30, cursorY,"Cognitive Abilities: select all that apply");
        }
        else{
            doc.text(30, cursorY + 10, "Cognitive Abilities: select all that apply");
        }
        cursorY += lineSpacing;
        if($('input[id=cot]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY, "Difficulty concentrating on task::");
            }
            else{
                doc.text(30, cursorY + 10, "Difficulty concentrating on task:");
            }
            cursorY += lineSpacing;
        }


        if($('input[id=memorydiff]:checked').length > 0){
            if (cursorY > pageHeight) { // Auto-paging
                doc.addPage();
                cursorY = pageWrapInitialYPosition;
                doc.text(45, cursorY,  "Memories Difficulties:");
            }
            else{
                doc.text(30, cursorY + 10, "Memories Difficulties:");
            }
            cursorY += lineSpacing;
        }

 /*
         doc.text(30, 195, "Vehicle and Adaptive Equipment Recommendations:");
            doc.text(45, 205, "Minivan:")
            doc.text(105, 205, minivan);
            doc.text(45, 215, "Reconmendations other:")
            doc.text(105, 215, reconmendationsOther);

            doc.text(45, 235, "Evaluated on:")
            doc.text(105, 235, evalDate);

            doc.text(45, 225, "Evaluated by:")
            doc.text(105, 225, evaluatedBy);


        */

        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(30, cursorY,"Funding");
        }
        else{
            doc.text(30, cursorY + 10, "Funding");
        }
        cursorY += lineSpacing;


        if (cursorY > pageHeight) { // Auto-paging
            doc.addPage();
            cursorY = pageWrapInitialYPosition;
            doc.text(45, cursorY, "Name of funding source:");
        }
        else{
            doc.text(45, cursorY + 10, "Name of funding source:");
        }
        fundingSourceLines.forEach(lineText => {
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
            doc.text(45, cursorY, "Email:");
        }
        else{
            doc.text(45, cursorY + 10, "Email:");
        }
        fundingEmailLines.forEach(lineText => {
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
            doc.text(45, cursorY, "Mobile Number:");
        }
        else{
            doc.text(45, cursorY + 10, "Mobile Number:");
        }
        fundingMobileNumberLines.forEach(lineText => {
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
            doc.text(45, cursorY, "Address:");
        }
        else{
            doc.text(45, cursorY + 10, "Address:");
        }
        fundingAddressLines.forEach(lineText => {
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
        doc.save("IntakeForm.pdf");
        alert("Please send the downloaded file to the employee who referred you this link")

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

    const generalStyles = {
      marginLeft: '20px',
      marginRight: '20px',
    };

    return (
      <div style={generalStyles}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        </div>
    <h1>Client</h1>
    <div class="form-group">
        <label htmlFor="firstName">First Name</label>
    <input
    className="form-control"
    name="firstName"
    placeholder="first name"
    id="firstName"
    ref={register({ required: true })} />
    {errors.firstName && <p>First name is required</p>}
    </div>

    <div class="form-group">
        <label htmlFor="lastName">Last Name</label>
    <input class="form-control" name="lastName" placeholder="last name" id="lastName" ref={register({ required: 'ERROR' })}  />
        {errors.lastName && <p>Last name is required</p>}
        </div>

        <label htmlFor="dateOfBirth">Date of birth</label>
        <DatePicker
            isClearable
            name="dateOfBirth"
            id="DatePicker"
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
                    id="mobileNumber"
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
                                <input type="text" name="state" class="form-control" id="inputState"
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
                                        id = "fName"
                                        ref={register}/>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                    <input id="lName" class="form-control" name="referalLastName" placeholder="last name" ref={register}/>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input
                                        class="form-control"
                                        name="referalEmail"
                                        id="inputEmail5"
                                        placeholder="bluebill1049@hotmail.com"
                                        type="text"
                                        ref={register}/>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="mobileNumber">Mobile number</label>
                                    <input
                                        type="tel"
                                    class="form-control"
                                        name="referalMobileNumber"
                                        id="mobileNumber2"
                                        ref={register}/>

                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" name="referalAddress"  class="form-control" id="inputAddress4" placeholder="1234 Main St" ref={register}/>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" name="referalCity"  class="form-control" id="inputCity4" ref={register}/>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <input type="text" name="referalState" class="form-control" id="inputState4"
                                        ref={register}/>

                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" name="referalZip"class="form-control" id="inputZip4"  ref={register}/>
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
                                        id="diagnosis"
                                        ref={register}/>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="onset">Onset</label>
                                        <input
                                        className="form-control"
                                        name="onset"
                                        id="onset"
                                        ref={register}/>
                                    </div>

                                    <label htmlFor="seizureDate">Date of last seizure (if applicable)</label>
                                    <DatePicker
                                        isClearable
                                        name="seizureDate"
                                        selected={seizureDate}
                                        id="seizure"
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
                                    <input name="driverLicense" type="checkbox" id = "HasLicense" ref={register} />
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
                                               id = "priv1"
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
                                        <input class="form-check-input" name="priviledgeToDrive" type="radio" id="priv2" value="no"
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
                                        id = "vehicleMake"

                                        ref={register} />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="Mileage">Mileage</label>
                                        <input
                                        className="form-control"
                                        name="mileage"
                                        id = "Mileage"
                                        ref={register} />
                                    </div>

                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">Do you currently use adaptive equipment to drive?</legend>
                                    <input name="adaptiveEquipment" id = "useAEToDrive" type="checkbox" ref={register} />
                                    </div>
                                        {adaptiveEquipment && (
                                        <div>
                                        <label>Describe the equipments</label>
                                        <textarea class="form-control" type="text" id = "useAEToDrive" name="adaptiveEquipmentDescription" rows="3" ref={register} />
                                        <label>Problems using the equipment</label>
                                        <textarea class="form-control" type="text" id = "useAEToDrive" name="adaptiveEquipmentProblem" rows="3" ref={register} />
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
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="limited hand function" id="lhf" ref={register}/>
                                    <label  class="form-check-label" for="defaultCheck1">
                                        Limited hand function
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving arms" id="dma" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty moving arms
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving legs" id="dml" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty moving legs
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head up" id="dmhu" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty moving head up
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head down" id="dmhd" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty moving head down
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head left" id="dmhl" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty moving head left
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="difficulty moving head right" id="dmhr" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty moving head right
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="Neuropathy" id="neur" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Neuropathy
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input name="physicalAbilities" class="form-check-input" type="checkbox" value="visual difficulties" id="vd" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Visual difficulties
                                    </label>
                                    </div>

                                    <label htmlFor="firstName">Do you use any of the following? (Check all that apply)</label>
                                    <div class="form-check">
                                        <input name="physicalEquipments" class="form-check-input" type="checkbox" value="walker" id="walker" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Walker
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input name="physicalEquipments" class="form-check-input" type="checkbox" value="crutches" id="crutches" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Crutches
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input name="physicalEquipments" class="form-check-input" type="checkbox" value="cane" id="cane" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Cane
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input name="physicalEquipments" class="form-check-input" type="checkbox" value="manual wheelchair" id="manualwc" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Manual wheelchair
                                    </label>
                                    </div>

                                    <div class="form-check">
                                        <input name="physicalEquipments" class="form-check-input" type="checkbox" value="power wheelchair" id="powerwc" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Power wheelchair
                                    </label>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="lastName">Wheelchair make/model (if applicable)</label>
                                    <input class="form-control" name="wheelchairModel" id="wheel"  ref={register} />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="lastName">Seated height in wheelchair (floor to top of head)</label>
                                    <input class="form-control" name="wheelchairHeight" id="height" ref={register} />
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
                                        id="whyes"
                                        ref={register} />

                                    <label class="form-check-label" for="gridRadios1">
                                        Yes
                                        </label>
                                        </div>

                                        <div class="form-check">
                                        <input class="form-check-input" name="wheelchairTransfer" type="radio" id="whno" value="no"/>
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
                                        <input name="cognitiveAbilities" class="form-check-input" type="checkbox" value="difficulty concentrating on task" id="cot" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Difficulty concentrating on task
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input name="cognitiveAbilities" class="form-check-input" type="checkbox" value="memories difficulties" id="memorydiff" ref={register} />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Memories difficulties
                                    </label>
                                    </div>

                                    <h1>Funding</h1>


                                    <div class="row">
                                        <legend class="col-form-label col-sm-2 pt-0">Private pay?</legend>
                                    <input name="privatePayCheckbox" type="checkbox" id="privetepay" ref={register} />
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
                                        id = "FundingSource"
                                        ref={register} />
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Contact person</label>
                                    <input
                                    class="form-control"
                                        name="fundingContactPerson"
                                        type="text"
                                        id = "ContactPerson"
                                        ref={register}    />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input
                                    class="form-control"
                                        name="fundingEmail"
                                        type="email"
                                        id = "FundingEmail"
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
                                        id = "FundingMobileNumber"
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
                                            <input type="text" name="fundingAddress" id = "FundingAddress" class="form-control" placeholder="1234 Main St"  ref={register} />
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
                                            <button type="submit" class="btn btn-primary">Submit and generate PDF</button>
                                            </form>
                                            </div>
                                            );
                                          }

export default IntakeForm
