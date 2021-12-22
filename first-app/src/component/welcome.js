import React, { Component } from 'react'

class Welcome extends Component{
    render()
    {
        const {name, college} = this.props
        // const {state1, state2} = this.props
        return (<h1>{name} studies at {college}</h1>)
    }
}

export default Welcome