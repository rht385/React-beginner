import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Rohit</div>;
    // }
    // return <div>Welcome Family</div>;
    return (
        this.state.isLoggedIn ?<div>Welcome Rohit</div>:<div>Welcome Family</div>
    )
    // return (
    //     this.state.isLoggedIn && <div>Welcome Rohit</div>
    // )
  }
}

export default UserGreeting;
