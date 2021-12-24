import React, { Component } from 'react'
import LifecycleB from './lifecycleB'

class LifecycleA extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Rohit Kumar'
        }
        console.log('LifecyleA Method')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getDerivedsatefromprops')
        return null
    }

    componentDidMount(){
        console.log('component did mount')
    }

    shouldComponentUpdate(){
        console.log('lifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('lifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifeCycleA componentDidUpdate')
    }

    changeState = event =>{
        this.setState({
            name: 'prem'
        })
    }
    render(){
        console.log('lifeCycle Render')
        return(
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>change state</button>
                <LifecycleB/>
            </div>
            
        )
    }
}

export default LifecycleA