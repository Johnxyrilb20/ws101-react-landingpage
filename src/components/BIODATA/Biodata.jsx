import { Component } from "react"
import './Biodata.css'
function biodata(props) {
    return (
        <div class="biodata">
            <h1>my Biodata</h1>
            <p> <strong>Name:</strong> {props.name}{props.lastname} </p>
            <p> <strong>Mobile:</strong> {props.mobile} </p>
            <p> <strong>email:</strong> {props.email} </p>
            <p> <strong>Gender:</strong> {props.Gender} </p>
            <p> <strong>Birthdate:</strong> {props.birthdate} </p>
            <p> <strong>Father's Name:</strong> {props.father} </p>
            <p> <strong>Mother's Name:</strong> {props.mother} </p>
            <h2>Education:</h2>
            <p> <strong>High School:</strong> {props.highschool} </p>
            <p> <strong>College:</strong> {props.college} </p>
        </div>
    );
  }

export default biodata;
  