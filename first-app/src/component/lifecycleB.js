import React, { Component } from 'react'


class LifecycleB extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Rohit Kumar'
        }
        console.log('LifecyleB Method')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getDerivedsatefromprops')
        return null
    }

    componentDidMount(){
        console.log('component did mount')
    }

    shouldComponentUpdate(){
        console.log('lifeCycleb shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('lifeCycleb getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifeCycleb componentDidUpdate')
    }
    render(){
        console.log('lifeCycle Render')
        return(
                <div>LifecycleB</div>
        )
    }
}

export default LifecycleB