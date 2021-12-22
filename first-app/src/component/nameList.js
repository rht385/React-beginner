import React, { Component } from "react";
import Person from "./person";

// class NameList extends Component{
//     render(){

function NameList() {
    const student = [
        {
            name: 'Rohit',
            college: 'IIT Dhanbad',
            year: '3rd Year'
        },
        {
            name: 'Rahul',
            college: 'IIT Guwahati',
            year: '2rd Year'
        },
        {
            name: 'Prem',
            college: 'IIT Bombay',
            year: 'Final Year'
        }
    ]
    const studentList = student.map(boy => <Person boy={boy}/>)
  return (
      <div>{studentList}</div>
  )
}
export default NameList;
