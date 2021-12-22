import React from "react";

// function Greet()
// {
//     return (
//         <h1>Hello Rohit</h1>
//     )
// }
// const Greet = ({name, college}) => {
const Greet = props => {
  const { name, college }= props
  return (
    <div>
      <h1>
        Hello {name} is student of {college}
      </h1>
      
    </div>
  );
};

export default Greet;
