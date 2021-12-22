import React, { Component } from 'react'
import ClassClick from './component/classClick';
import Counter from './component/counter';
import EventBind from './component/eventBind';
import FunClick from './component/funClick';

import Greet from './component/greet';
import Message from './component/message';
import NamenList from './component/nameList';
import ParentComponent from './component/parentComponent';
import UserGreeting from './component/usergretting';
import Welcome from './component/welcome'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NamenList/>
                {/* <UserGreeting/> */}
                {/* <ParentComponent/> */}
                {/* <EventBind/> */}
                {/* <FunClick/>
                <ClassClick/> */}
                {/* <Counter/> */}
                {/* <Message/> */}
                {/* <Greet name='Rohit' college='IIT Dhanbad'/>
                <Greet name='Prem' college = 'AKTU'/>
                <Greet name='Rahul' college = 'IIT Guwhati'/>
                <Welcome name='Rohit' college='IIT Dhanbad'/>
                <Welcome name='Rahul' college='IIT Guwhati'/>
                <Welcome name='Prem' college='AKTU'/> */}
            </div>
        )
    };
}
export default App