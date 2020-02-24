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



export default function Upload(){

    document.getElementById("myBtn").addEventListener("click", function() {
        uploadFile1();
    });


    function uploadFile1(){
        var files = myInput.files[0];
        var reader = new FileReader();
        reader.onload = processFile(files);
        reader.readAsText(files);
    }

    function uploadFile(){
        var files = document.querySelector('input').files[0];
        var reader = new FileReader();
        reader.onload = processFile(files);
        reader.readAsDataURL(files);
    }

    function processFile(theFile){
        return function(e) {
            var theBytes = e.target.result; //.split('base64,')[1];
            console.log(theBytes);
            document.getElementById('file').innerText = theBytes;
            console.log(theBytes);
        }
    }


        return (
            <input id="myInput" type="file">
                <button id="myBtn">Try it</button>
                <span id="file"></span>
               )
}


