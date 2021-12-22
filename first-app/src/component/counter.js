import React, { Component } from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    Increament(){
        // this.setState({
        //     count: this.state.count+1
        // },()=>{
        //     console.log('callback Value', this.state.count)
        // }
        // )
        // console.log(this.state.count)

        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }

    increamentFive(){
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
    }

    decreament (){
        this.setState({
            count: this.state.count-1
        })
    }
    render(){
        return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.increamentFive()}>Increase</button>
            <button onClick={()=>this.decreament()}>Decreament</button>
        </div>)
    }
}

export default Counter