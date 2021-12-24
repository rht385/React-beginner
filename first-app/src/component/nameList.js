import React, { Component } from "react";
import Person from "./person";

// class NameList extends Component{
//     render(){

function NameList() {
    const student = [
        {
            id: 1,
            name: 'Rohit',
            college: 'IIT Dhanbad',
            year: '3rd Year'
        },
        {
            id: 2,
            name: 'Rahul',
            college: 'IIT Guwahati',
            year: '2rd Year'
        },
        {
            id: 3,
            name: 'Prem',
            college: 'IIT Bombay',
            year: 'Final Year'
        }
    ]
    const studentList = student.map(boy => <Person key={student.id} boy={boy}/>)
  return (
      <div>{studentList}</div>
  )
}
export default NameList;
