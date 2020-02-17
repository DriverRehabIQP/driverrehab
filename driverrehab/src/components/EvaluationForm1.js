import React from "react"

import { useForm } from "react-hook-form";
import  { useState } from 'react';

import "./index.css";
import Client from "./client";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function EvaluationForm() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button type="button" onClick={() => handleAdd()}>
        +
      </button>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
	      value={field.value}
              placeholder="Enter text"
              onChange={e => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
