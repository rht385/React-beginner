import React , {Component} from 'react'

class ClassClick extends Component{

    clickHandler(){
        console.log('class Clicked me')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Clicked me</button>
            </div>
        )
    }
}

export default ClassClick